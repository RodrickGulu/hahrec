import React, { useEffect, useState } from 'react';

export default function AdminBookingList() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const loadBookings = async () => {
      try {
        const response = await fetch('https://hahrec-backend.onrender.com/api/bookings');
        if (!response.ok) {
          throw new Error('Unable to load bookings');
        }

        const payload = await response.json();
        setBookings(payload.bookings || []);
      } catch (error) {
        console.error('Failed to load bookings:', error);
        setBookings([]);
      }
    };

    loadBookings();
  }, []);

  return (
    <div className='row m-1'>
      <h3>Bookings</h3>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <table className='table table-striped'>
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
              <tr key={booking.id || index}>
                <td>{booking.type}</td>
                <td>{booking.name}</td>
                <td>{booking.email}</td>
                <td>{booking.genre || '-'}</td>
                <td>{booking.message}</td>
                <td>{booking.createdAt ? new Date(booking.createdAt).toLocaleString() : '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
