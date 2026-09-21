import React, { useState, useEffect } from 'react';
import Navbar from '../modules/Navbar';
import Location from '../modules/Location';
import AdminCommentList from '../modules/AdminCommentList';
import AdminBookingList from '../modules/AdminBookingList';
import AdminGalleryManager from '../modules/AdminGalleryManager';
import Footer from '../modules/Footer';
import '../css/admin.css';

export default function Admin() {
  const [authToken, setAuthToken] = useState(() => localStorage.getItem('hahrec-admin-token') || '');
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginNotice, setLoginNotice] = useState('');
  const [activeSection, setActiveSection] = useState('overview');

  const handleAdminLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://hahrec-backend.onrender.com/api/admin/login', {
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
      setActiveSection('overview');
    } catch (error) {
      console.error('Login failed:', error);
      setLoginError(error.message || 'Unable to sign in.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('hahrec-admin-token');
    setAuthToken('');
    setPassword('');
    setLoginNotice('');
    setLoginError('');
    setActiveSection('overview');
  };

  useEffect(() => {
    if (!authToken) {
      setLoginNotice('');
    }
  }, [authToken]);

  const menuItems = [
    { key: 'overview', label: 'Overview' },
    { key: 'gallery', label: 'Gallery' },
    { key: 'bookings', label: 'Bookings' },
    { key: 'comments', label: 'Comments' }
  ];

  return (
    <div className='admin-dashboard'>
      <Location />
      <Navbar dropdown='disabled' />

      <div className='container py-4 admin-dashboard-shell'>
        <div className='admin-dashboard-header'>
          <div>
            <p className='admin-kicker'>Studio operations</p>
            <h1>Admin Dashboard</h1>
          </div>

          <div className='admin-header-actions'>
            <span className={`admin-status-pill ${authToken ? 'is-active' : 'is-offline'}`}>
              {authToken ? 'Signed in' : 'Signed out'}
            </span>
            {authToken && (
              <button type='button' className='admin-logout-btn' onClick={handleLogout}>
                Sign Out
              </button>
            )}
          </div>
        </div>

        <div className='admin-layout'>
          <aside className='admin-sidebar'>
            <div className='admin-sidebar-brand'>
              <span className='admin-brand-mark'>H</span>
              <div>
                <strong>HAHREC</strong>
                <small>Studio Admin</small>
              </div>
            </div>

            <nav className='admin-sidebar-nav'>
              {menuItems.map((item) => (
                <button
                  key={item.key}
                  type='button'
                  className={`admin-nav-item ${activeSection === item.key ? 'active' : ''}`}
                  onClick={() => setActiveSection(item.key)}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className='admin-sidebar-card'>
              <p>Protected access</p>
              <strong>{authToken ? 'Admin session active' : 'Log in to manage content'}</strong>
            </div>
          </aside>

          <main className='admin-main-content'>
            {activeSection === 'overview' && (
              <section className='admin-panel admin-panel-featured'>
                <div className='admin-section-heading'>
                  <div>
                    <p className='admin-kicker'>Overview</p>
                    <h2>Studio health</h2>
                  </div>
                </div>

                <div className='admin-stat-grid'>
                  <div className='admin-stat-card'>
                    <span>Live sessions</span>
                    <strong>Ready</strong>
                    <small>Broadcast management</small>
                  </div>
                  <div className='admin-stat-card'>
                    <span>Comments</span>
                    <strong>Moderation</strong>
                    <small>Review all guest messages</small>
                  </div>
                  <div className='admin-stat-card'>
                    <span>Bookings</span>
                    <strong>Requests</strong>
                    <small>Track studio enquiries</small>
                  </div>
                </div>
              </section>
            )}

            <section className='admin-panel admin-auth-panel'>
              <div className='admin-section-heading'>
                <div>
                  <p className='admin-kicker'>Access</p>
                  <h2>Admin sign in</h2>
                </div>
              </div>

              {loginError && <div className='admin-alert admin-alert-error'>{loginError}</div>}
              {loginNotice && <div className='admin-alert admin-alert-success'>{loginNotice}</div>}

              {authToken ? (
                <div className='admin-auth-success'>
                  <strong>Signed in successfully.</strong>
                  <p>You are now able to manage gallery uploads, comments, and bookings.</p>
                </div>
              ) : (
                <form onSubmit={handleAdminLogin} className='admin-login-form'>
                  <div className='admin-form-row'>
                    <label>Username</label>
                    <input value={username} onChange={(event) => setUsername(event.target.value)} />
                  </div>
                  <div className='admin-form-row'>
                    <label>Password</label>
                    <input type='password' value={password} onChange={(event) => setPassword(event.target.value)} />
                  </div>
                  <button type='submit' className='admin-primary-btn'>Sign In</button>
                </form>
              )}
            </section>

            {activeSection === 'gallery' && (
              <section id='gallery' className='admin-panel'>
                <div className='admin-section-heading'>
                  <div>
                    <p className='admin-kicker'>Media</p>
                    <h2>Gallery manager</h2>
                  </div>
                </div>
                <AdminGalleryManager authToken={authToken} />
              </section>
            )}

            {activeSection === 'bookings' && (
              <section id='bookings' className='admin-panel'>
                <div className='admin-section-heading'>
                  <div>
                    <p className='admin-kicker'>Bookings</p>
                    <h2>Session requests</h2>
                  </div>
                </div>
                <AdminBookingList authToken={authToken} />
              </section>
            )}

            {activeSection === 'comments' && (
              <section id='comments' className='admin-panel'>
                <div className='admin-section-heading'>
                  <div>
                    <p className='admin-kicker'>Comments</p>
                    <h2>Guest feedback</h2>
                  </div>
                </div>
                <AdminCommentList authToken={authToken} />
              </section>
            )}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
