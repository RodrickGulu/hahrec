import React, { useState, useMemo, useEffect } from 'react';
import Modal from 'react-modal';
import '../css/gallery.css';

Modal.setAppElement('#root');

const API_BASE_URL = 'https://hahrec-backend.onrender.com';

const toMediaUrl = (value) => {
  if (!value) return '';
  return value.startsWith('http') ? value : `${API_BASE_URL}${value}`;
};

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    borderRadius: '16px',
    padding: '0',
    backgroundColor: 'transparent',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 1000,
  },
};

export default function Pics() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [serverGallery, setServerGallery] = useState([]);

  const openModal = (media) => {
    setSelectedMedia(media);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedMedia(null);
    setModalOpen(false);
  };

  useEffect(() => {
    const loadGallery = async () => {
      try {
        const response = await fetch('https://hahrec-backend.onrender.com/api/gallery');
        if (!response.ok) {
          throw new Error('Unable to load gallery');
        }

        const payload = await response.json();
        setServerGallery(payload.gallery || []);
      } catch (error) {
        console.error('Failed to fetch gallery:', error);
        setServerGallery([]);
      }
    };

    loadGallery();
  }, []);

  const galleryItems = useMemo(() => {
    return (serverGallery || []).map((item) => {
      const sourceUrl = item.src || item.url || item.thumbnail;
      const normalizedType = item.type === 'video' || (item.type || '').toLowerCase() === 'video' || /\.(mp4|webm|mov|avi)$/i.test(String(sourceUrl || '')) ? 'video' : 'photo';
      const finalSrc = toMediaUrl(sourceUrl);

      return {
        id: item.id || item._id,
        title: item.title || 'Gallery item',
        type: normalizedType,
        url: normalizedType === 'video' ? toMediaUrl(item.url || item.src || item.thumbnail) : finalSrc,
        src: finalSrc,
        thumbnail: toMediaUrl(item.thumbnail || item.url || item.src),
        alt: item.title || item.alt || 'Gallery media',
        createdAt: item.createdAt,
      };
    });
  }, [serverGallery]);

  const filteredItems = useMemo(() => {
    if (activeFilter === 'all') return galleryItems;
    return galleryItems.filter(item => item.type === activeFilter);
  }, [activeFilter, galleryItems]);

  return (
    <div className='gallery-container'>
      <div className='gallery-header'>
        <h3>🎬 Media Gallery</h3>
        <p className='gallery-subtitle'>Explore our studio moments and behind-the-scenes content</p>
      </div>

      <div className='gallery-filters'>
        <button
          className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => setActiveFilter('all')}
        >
          <span className='filter-icon'>🎯</span>
          All
        </button>
        <button
          className={`filter-btn ${activeFilter === 'photo' ? 'active' : ''}`}
          onClick={() => setActiveFilter('photo')}
        >
          <span className='filter-icon'>📸</span>
          Photos
        </button>
        <button
          className={`filter-btn ${activeFilter === 'video' ? 'active' : ''}`}
          onClick={() => setActiveFilter('video')}
        >
          <span className='filter-icon'>🎥</span>
          Videos
        </button>
      </div>

      <div className='gallery-grid-modern'>
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className={`gallery-card ${item.type}`}
            onClick={() => openModal(item)}
          >
            <div className='gallery-card-image'>
              {item.type === 'photo' ? (
                <img src={item.src || item.url} alt={item.alt} className='gallery-image' />
              ) : (
                <video
                  src={item.url}
                  muted
                  loop
                  playsInline
                  preload='metadata'
                  className='gallery-image'
                />
              )}
              {item.type === 'video' && (
                <div className='video-badge'>
                  <span className='play-icon'>▶</span>
                </div>
              )}
              <div className='gallery-overlay'></div>
            </div>
            <div className='gallery-card-info'>
              <p className='gallery-card-title'>
                {item.title}
              </p>
              <span className='gallery-card-type'>
                {item.type === 'photo' ? 'Photo' : 'Video'}
              </span>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Media Modal"
      >
        {selectedMedia && (
          <div className='modal-content'>
            {selectedMedia.type === 'photo' ? (
              <img src={selectedMedia.src} alt={selectedMedia.alt} className='modal-image' />
            ) : (
              <div className='video-placeholder'>
                <video controls src={selectedMedia.url} className='modal-video' />
              </div>
            )}
            <button className='modal-close' onClick={closeModal}>✕</button>
          </div>
        )}
      </Modal>
    </div>
  );
}
