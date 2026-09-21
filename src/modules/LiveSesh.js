import React, { useState, useRef, useEffect } from 'react'
import '../css/live-sessions.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faStop, faCog, faTv, faCircle, faUsers, faBook } from '@fortawesome/free-solid-svg-icons'

export default function LiveSesh() {
  const API_BASE = 'https://hahrec-backend.onrender.com/api'

  const [isLive, setIsLive] = useState(false)
  const [streamUrl, setStreamUrl] = useState('')
  const [showSettings, setShowSettings] = useState(false)
  const [tempUrl, setTempUrl] = useState('')
  const [viewerCount, setViewerCount] = useState(0)
  const [showGuide, setShowGuide] = useState(false)
  const [isBusy, setIsBusy] = useState(false)
  const [apiError, setApiError] = useState('')
  const videoRef = useRef(null)

  const loadLiveSession = async () => {
    try {
      const response = await fetch(`${API_BASE}/live/status`)
      if (!response.ok) {
        throw new Error('Unable to load live session')
      }

      const data = await response.json()
      setIsLive(Boolean(data.isLive))
      setStreamUrl(data.streamUrl || '')
      setTempUrl(data.streamUrl || '')
      setViewerCount(data.viewerCount || 0)

      if (videoRef.current && data.isLive && data.streamUrl) {
        videoRef.current.src = data.streamUrl
      }
    } catch (error) {
      console.error('Failed to load live session:', error)
    }
  }

  useEffect(() => {
    loadLiveSession()
  }, [])

  useEffect(() => {
    if (isLive) {
      const interval = setInterval(() => {
        const nextViewerCount = Math.max(0, viewerCount + Math.floor(Math.random() * 5) - 2)
        setViewerCount(nextViewerCount)

        fetch(`${API_BASE}/live/viewers`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ viewerCount: nextViewerCount })
        }).catch(error => console.error('Viewer counter update failed:', error))
      }, 3000)

      return () => clearInterval(interval)
    } else {
      setViewerCount(0)
    }
  }, [isLive, viewerCount])

  const startStream = async () => {
    if (!tempUrl.trim()) {
      setApiError('Please enter a valid HLS stream URL')
      return
    }

    setIsBusy(true)
    setApiError('')

    try {
      const response = await fetch(`${API_BASE}/live/start`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          streamUrl: tempUrl,
          title: 'Studio Session',
          description: 'Live studio broadcast'
        })
      })

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}))
        throw new Error(payload.message || 'Unable to start stream')
      }

      const data = await response.json()
      const session = data.liveSession

      setStreamUrl(session.streamUrl)
      setIsLive(true)
      setShowSettings(false)
      setViewerCount(session.viewerCount || 1)

      if (videoRef.current && session.streamUrl.includes('.m3u8')) {
        videoRef.current.src = session.streamUrl
        videoRef.current.play().catch(err => console.log('Autoplay prevented:', err))
      }
    } catch (error) {
      console.error('Failed to start stream:', error)
      setApiError(error.message || 'Unable to start the stream')
    } finally {
      setIsBusy(false)
    }
  }

  const stopStream = async () => {
    setIsBusy(true)

    try {
      const response = await fetch(`${API_BASE}/live/stop`, {
        method: 'POST'
      })

      if (!response.ok) {
        throw new Error('Unable to stop stream')
      }

      const data = await response.json()

      setIsLive(false)
      setStreamUrl('')
      setTempUrl('')
      setViewerCount(data.liveSession.viewerCount || 0)

      if (videoRef.current) {
        videoRef.current.pause()
        videoRef.current.src = ''
      }
    } catch (error) {
      console.error('Failed to stop stream:', error)
      setApiError(error.message || 'Unable to stop the stream')
    } finally {
      setIsBusy(false)
    }
  }

  return (
    <div className='live-sessions-container'>
      <div className='live-sessions-header'>
        <h3>🎙️ Live Sessions</h3>
        <p>Experience live music and production broadcasts directly from our studio</p>
      </div>

      {isLive ? (
        <div className='live-stream-active'>
          {/* Live Status Bar */}
          <div className='live-status-bar'>
            <div className='live-indicator'>
              <FontAwesomeIcon icon={faCircle} className='live-dot' />
              <span>LIVE NOW</span>
            </div>
            <div className='viewer-count'>
              <FontAwesomeIcon icon={faUsers} />
              <span>{viewerCount} Viewers</span>
            </div>
            <button className='stop-stream-btn' onClick={stopStream} disabled={isBusy}>
              <FontAwesomeIcon icon={faStop} /> {isBusy ? 'Stopping...' : 'Stop Stream'}
            </button>
          </div>

          {/* Video Player */}
          <div className='stream-player-container'>
            <video
              ref={videoRef}
              className='stream-player'
              controls
              controlsList='nodownload'
              onError={(e) => console.log('Video error:', e)}
            >
              <source src={streamUrl} type='application/x-mpegURL' />
              <p>Your browser does not support HTML5 video streaming.</p>
            </video>
            
            {!isLive && (
              <div className='stream-overlay'>
                <div className='overlay-message'>
                  <FontAwesomeIcon icon={faTv} />
                  <p>Stream Offline</p>
                </div>
              </div>
            )}
          </div>

          {/* Stream Info */}
          <div className='stream-info'>
            <div className='info-card'>
              <h4>📡 Stream Source</h4>
              <p className='stream-url-display'>{streamUrl}</p>
            </div>
            <div className='info-card'>
              <h4>💡 Tips</h4>
              <p>Make sure OBS is configured to stream to your server. Keep the stream URL secure.</p>
            </div>
          </div>

          <button className='settings-btn' onClick={() => setShowSettings(true)}>
            <FontAwesomeIcon icon={faCog} /> Stream Settings
          </button>
        </div>
      ) : (
        <div className='coming-soon-box'>
          <div className='coming-soon-icon'>
            <FontAwesomeIcon icon={faPlay} />
          </div>
          <h2>Live Sessions Ready</h2>
          <p>We're set up to broadcast live sessions, studio sessions, and exclusive performances directly from our studio using OBS.</p>
          
          <div className='stream-setup-buttons'>
            <button className='setup-btn primary' onClick={() => setShowSettings(true)}>
              <FontAwesomeIcon icon={faTv} /> Start Broadcasting
            </button>
            <button className='setup-btn secondary' onClick={() => setShowGuide(!showGuide)}>
              <FontAwesomeIcon icon={faBook} /> {showGuide ? 'Hide' : 'Show'} Setup Guide
            </button>
          </div>

          {showGuide && (
            <div className='setup-guide'>
              <h3>📖 OBS Stream Setup Guide</h3>
              <div className='guide-steps'>
                <div className='step'>
                  <span className='step-number'>1</span>
                  <div>
                    <h5>Configure OBS Output</h5>
                    <p>Go to Settings → Stream</p>
                    <code>Service: Custom</code>
                    <code>Server: rtmp://your-server/live</code>
                    <code>Stream Key: your-stream-key</code>
                  </div>
                </div>
                <div className='step'>
                  <span className='step-number'>2</span>
                  <div>
                    <h5>Set Stream URL</h5>
                    <p>Click "Start Broadcasting" below and enter your HLS stream URL</p>
                    <code>Example: https://your-server/live/stream.m3u8</code>
                  </div>
                </div>
                <div className='step'>
                  <span className='step-number'>3</span>
                  <div>
                    <h5>Go Live</h5>
                    <p>Click "Start Broadcasting" to begin streaming. The video player will load your stream.</p>
                  </div>
                </div>
              </div>
              <div className='guide-note'>
                <strong>Note:</strong> You'll need a streaming server (Nginx-RTMP, Wowza, or Streamyard) to convert OBS's RTMP output to HLS format for web playback.
              </div>
            </div>
          )}
        </div>
      )}

      {/* Stream Settings Modal */}
      {showSettings && (
        <div className='settings-modal'>
          <div className='modal-backdrop' onClick={() => setShowSettings(false)}></div>
          <div className='modal-content stream-settings'>
            <h3>Stream Settings</h3>
            <button className='modal-close' onClick={() => setShowSettings(false)}>✕</button>
            
            <div className='settings-form'>
              <div className='form-group'>
                <label>Stream URL (HLS)</label>
                <input
                  type='text'
                  placeholder='https://your-server/live/stream.m3u8'
                  value={tempUrl}
                  onChange={(e) => setTempUrl(e.target.value)}
                  className='stream-input'
                />
                <small>Enter the HLS stream URL from your streaming server</small>
              </div>

              <div className='form-group'>
                <label>Stream Title (Optional)</label>
                <input
                  type='text'
                  placeholder='E.g., Studio Session with Artist Name'
                  className='stream-input'
                />
              </div>

              <div className='form-group'>
                <label>Description (Optional)</label>
                <textarea
                  placeholder='Describe what will be streamed...'
                  rows='3'
                  className='stream-input'
                ></textarea>
              </div>

              <div className='settings-actions'>
                <button className='btn-primary' onClick={startStream} disabled={isBusy}>
                  <FontAwesomeIcon icon={faPlay} /> {isBusy ? 'Starting...' : 'Start Broadcasting'}
                </button>
                <button className='btn-secondary' onClick={() => setShowSettings(false)}>
                  Cancel
                </button>
              </div>

              {apiError && <p className='text-danger'>{apiError}</p>}

              <div className='settings-info'>
                <h4>📋 Quick Reference</h4>
                <ul>
                  <li><strong>Format:</strong> HLS (.m3u8) or DASH (.mpd)</li>
                  <li><strong>Resolution:</strong> 1080p @ 60fps recommended</li>
                  <li><strong>Bitrate:</strong> 4500-6000 kbps</li>
                  <li><strong>Server:</strong> Use Nginx-RTMP, Wowza, or Streamyard</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
