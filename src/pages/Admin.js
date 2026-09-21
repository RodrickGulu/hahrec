import React, { useState, useEffect } from 'react';
import Navbar from '../modules/Navbar';
import Location from '../modules/Location';
import AdminCommentList from '../modules/AdminCommentList';
import AdminBookingList from '../modules/AdminBookingList';
import AdminGalleryManager from '../modules/AdminGalleryManager';
import Footer from '../modules/Footer';
import '../css/admin.css';

export default function Admin() {
  const [authToken, setAuthToken] = useState(() => {
    return localStorage.getItem('hahrec-admin-token') || '';
  });
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginNotice, setLoginNotice] = useState('');

  const handleAdminLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        throw new Error(payload.message || 'Admin login failed.');
      }

      const payload = await response.json();
      const nextToken = payload.token;

      localStorage.setItem('hahrec-admin-token', nextToken);
      setAuthToken(nextToken);
      setLoginError('');
      setLoginNotice('Admin session ready.');
    } catch (error) {
      console.error('Login failed:', error);
      setLoginError(error.message || 'Unable to sign in.');
    }
  };

  useEffect(() => {
    if (!authToken) {
      setLoginNotice('');
    }
  }, [authToken]);

  return (
    <div className='admin-dashboard'>
      <Location />
      <Navbar dropdown={'disabled'} />

      <div className='container py-4 admin-dashboard-shell'>
        <div className='admin-dashboard-header mb-4'>
          <div className='row align-items-center'>
            <div className='col-md-9'>
              <h1 className='display-6'>Admin Dashboard</h1>
              <p className='text-muted'>Studio request, comments, media and session management</p>
            </div>
            <div className='col-md-3 text-md-end'>
              <span className='badge bg-warning text-dark'>Studio Admin</span>
            </div>
          </div>
        </div>

        <div className='row mb-4'>
          <div className='col-md-4 mb-3'>
            <div className='card h-100 admin-dashboard-card'>
              <div className='card-body'>
                <h5 className='card-title'>Live Sessions</h5>
                <p className='card-text'>Status: Offline</p>
                <button className='btn btn-sm btn-outline-primary admin-admin-button'>Manage</button>
              </div>
            </div>
          </div>

          <div className='col-md-4 mb-3'>
            <div className='card h-100 admin-dashboard-card'>
              <div className='card-body'>
                <h5 className='card-title'>Comments</h5>
                <p className='card-text'>Moderation queue</p>
                <button className='btn btn-sm btn-outline-primary admin-admin-button'>Moderate</button>
              </div>
            </div>
          </div>

          <div className='col-md-4 mb-3'>
            <div className='card h-100 admin-dashboard-card'>
              <div className='card-body'>
                <h5 className='card-title'>Bookings</h5>
                <p className='card-text'>Session requests</p>
                <button className='btn btn-sm btn-outline-primary admin-admin-button'>View all</button>
              </div>
            </div>
          </div>
        </div>

        <div className='row mb-4'>
          <div className='col-md-4'>
            <div className='admin-login-box'>
              <h5 className='mb-3'>Admin Sign In</h5>

              {loginError && <div className='alert alert-danger'>{loginError}</div>}
              {loginNotice && <div className='alert alert-success'>{loginNotice}</div>}

              <form onSubmit={handleAdminLogin}>
                <div className='mb-3'>
                  <label className='form-label'>Username</label>
                  <input className='form-control' value={username} onChange={(event) => setUsername(event.target.value)} />
                </div>
                <div className='mb-3'>
                  <label className='form-label'>Password</label>
                  <input type='password' className='form-control' value={password} onChange={(event) => setPassword(event.target.value)} />
                </div>
                <button className='btn btn-primary-modern w-100' type='submit'>Sign In</button>
              </form>
            </div>
          </div>
          <div className='col-md-8'>
            <AdminGalleryManager authToken={authToken} />
          </div>
        </div>

        <div className='row'>
          <div className='col-12'>
            <AdminBookingList />
          </div>
          <div className='col-12 mt-4'>
            <h2 className='admin-panel-title'>Comments</h2>
            <AdminCommentList authToken={authToken} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
