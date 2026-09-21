import React, { useEffect, useState } from 'react';

export default function AdminBookingList({ authToken }) {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadBookings = async () => {
      if (!authToken) {
        setBookings([]);
        setError('Authentication required to view bookings.');
        return;
      }

      try {
        setLoading(true);
        setError('');

        const response = await fetch('https://hahrec-backend.onrender.com/api/admin/bookings', {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        });

        if (!response.ok) {
          const payload = await response.json().catch(() => ({}));
          throw new Error(payload.message || 'Unable to load bookings');
        }

        const payload = await response.json();
        setBookings(payload.bookings || []);
      } catch (error) {
        console.error('Failed to load bookings:', error);
        setError(error.message || 'Unable to load bookings');
        setBookings([]);
      } finally {
        setLoading(false);
      }
    };

    loadBookings();
  }, [authToken]);

  if (!authToken) {
    return (
      <div className='admin-lock-state'>
        <strong>Bookings are locked.</strong>
        <p>Sign in with an admin account to view session requests.</p>
      </div>
    );
  }

  return (
    <div className='admin-data-table'>
      {error && <div className='admin-alert admin-alert-error'>{error}</div>}

      {loading ? (
        <p className='text-muted'>Loading bookings...</p>
      ) : bookings.length === 0 ? (
        <p className='text-muted'>No bookings yet.</p>
      ) : (
        <div className='table-responsive'>
          <table className='table table-striped admin-bookings-table'>
            <thead>
              <tr>
                <th>Type</th>
                <th>Name</th>
                <th>Email</th>
                <th>Genre</th>
                <th>Message</th>
                <th>Created</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={booking.id || booking._id || index}>
                  <td>{booking.bookingType || booking.type || '-'}</td>
                  <td>{booking.name || '-'}</td>
                  <td>{booking.email || '-'}</td>
                  <td>{booking.genre || '-'}</td>
                  <td>{booking.message || '-'}</td>
                  <td>{booking.createdAt ? new Date(booking.createdAt).toLocaleString() : '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
