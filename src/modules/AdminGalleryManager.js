import React, { useEffect, useState } from 'react';

const API_BASE_URL = 'https://hahrec-backend.onrender.com';

const toMediaUrl = (value) => {
  if (!value) return '';
  return value.startsWith('http') ? value : `${API_BASE_URL}${value}`;
};

export default function AdminGalleryManager({ authToken }) {
  const [gallery, setGallery] = useState([]);
  const [title, setTitle] = useState('');
  const [mediaFile, setMediaFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');

  const normalizeGallery = (items = []) => {
    return items.map((item) => ({
      ...item,
      id: item.id || item._id,
      type: item.type || ((item.url || '').match(/\.(mp4|webm|mov|avi)$/i) ? 'video' : 'photo'),
      url: toMediaUrl(item.url || item.src || item.thumbnail),
      src: toMediaUrl(item.src || item.url || item.thumbnail),
      thumbnail: toMediaUrl(item.thumbnail || item.url || item.src)
    }));
  };

  useEffect(() => {
    const loadGallery = async () => {
      try {
        const response = await fetch('https://hahrec-backend.onrender.com/api/gallery');
        if (!response.ok) {
          throw new Error('Unable to load gallery');
        }

        const payload = await response.json();
        setGallery(normalizeGallery(payload.gallery || []));
      } catch (err) {
        console.error('Failed to load gallery:', err);
        setGallery([]);
      }
    };

    loadGallery();
  }, []);

  const handleUploadMedia = async (event) => {
    event.preventDefault();

    if (!authToken) {
      setError('Please sign in to manage gallery media.');
      return;
    }

    if (!mediaFile) {
      setError('Please choose a photo or video file first.');
      return;
    }

    setError('');
    setNotice('');

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append('file', mediaFile);
      if (title.trim()) {
        formData.append('title', title.trim());
      }

      const response = await fetch('https://hahrec-backend.onrender.com/api/admin/gallery/upload', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${authToken}`
        },
        body: formData
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        throw new Error(payload.message || 'Unable to upload media');
      }

      const payload = await response.json();
      const uploadedItem = normalizeGallery([payload.galleryItem || payload.video || payload])[0];

      setGallery((current) => [uploadedItem, ...current]);
      setTitle('');
      setMediaFile(null);
      event.target.reset();
      setNotice('Gallery media uploaded.');
    } catch (err) {
      console.error('Gallery upload failed:', err);
      setError(err.message || 'Unable to upload gallery media.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteMedia = async (id) => {
    if (!authToken) {
      setError('Authentication required.');
      return;
    }

    try {
      const response = await fetch(`https://hahrec-backend.onrender.com/api/admin/gallery/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        throw new Error(payload.message || 'Unable to remove media');
      }

      setGallery((current) => current.filter((item) => String(item.id) !== String(id)));
      setNotice('Gallery media removed.');
    } catch (err) {
      console.error('Gallery delete failed:', err);
      setError(err.message || 'Unable to remove media.');
    }
  };

  return (
    <section className='admin-panel admin-gallery-manager'>
      <div className='d-flex justify-content-between align-items-center mb-3'>
        <h3 className='admin-panel-title'>Gallery Media</h3>
      </div>

      {error && <div className='admin-alert admin-alert-error'>{error}</div>}
      {notice && <div className='admin-alert admin-alert-success'>{notice}</div>}

      <form onSubmit={handleUploadMedia} className='admin-gallery-form'>
        <div className='row g-2 align-items-end'>
          <div className='col-md-4'>
            <label className='form-label'>Media title</label>
            <input
              className='form-control'
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder='Studio Session'
            />
          </div>
          <div className='col-md-6'>
            <label className='form-label'>Photo or video file</label>
            <input
              type='file'
              className='form-control'
              accept='image/*,video/*'
              onChange={(event) => setMediaFile(event.target.files?.[0] || null)}
            />
          </div>
          <div className='col-md-2'>
            <button className='btn btn-primary-modern w-100' disabled={loading}>
              {loading ? 'Uploading...' : 'Upload'}
            </button>
          </div>
        </div>
      </form>

      <div className='admin-gallery-list mt-4'>
        {gallery.length === 0 ? (
          <p className='text-muted'>No gallery media yet.</p>
        ) : (
          <ul className='list-group'>
            {gallery.map((item) => (
              <li className='list-group-item d-flex justify-content-between align-items-center' key={item.id || item.title}>
                <span>
                  <strong>{item.title || item.videoTitle}</strong>
                  <small className='d-block text-muted'>
                    {item.type === 'video' ? 'Video' : 'Photo'} · {item.originalName || 'Uploaded media'}
                  </small>
                </span>
                <button className='btn btn-sm btn-outline-danger' onClick={() => handleDeleteMedia(item.id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
