const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

let liveSession = {
  isLive: false,
  streamUrl: '',
  title: '',
  description: '',
  startedAt: null,
  updatedAt: null,
  viewerCount: 0
};

let comments = [];
let bookings = [];

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'hahrec-live-backend'
  });
});

app.get('/api/live/status', (req, res) => {
  res.json(liveSession);
});

app.get('/api/live/history', (req, res) => {
  res.json({
    sessions: [
      {
        id: 'latest-session',
        status: liveSession.isLive ? 'live' : 'offline',
        startedAt: liveSession.startedAt,
        streamUrl: liveSession.streamUrl,
        title: liveSession.title,
        description: liveSession.description
      }
    ]
  });
});

app.post('/api/live/start', (req, res) => {
  const { streamUrl, title = 'Studio Session', description = '' } = req.body;

  if (!streamUrl || !streamUrl.trim()) {
    return res.status(400).json({
      message: 'A valid HLS streamUrl is required.'
    });
  }

  liveSession = {
    isLive: true,
    streamUrl: streamUrl.trim(),
    title: title.trim() || 'Studio Session',
    description: description.trim() || '',
    startedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    viewerCount: 1
  };

  res.status(201).json({
    message: 'Live session started.',
    liveSession
  });
});

app.post('/api/live/stop', (req, res) => {
  liveSession = {
    isLive: false,
    streamUrl: '',
    title: '',
    description: '',
    startedAt: null,
    updatedAt: new Date().toISOString(),
    viewerCount: 0
  };

  res.json({
    message: 'Live session stopped.',
    liveSession
  });
});

app.post('/api/live/viewers', (req, res) => {
  const { viewerCount } = req.body;

  if (typeof viewerCount !== 'number' || viewerCount < 0) {
    return res.status(400).json({
      message: 'viewerCount must be a non-negative number.'
    });
  }

  liveSession = {
    ...liveSession,
    viewerCount,
    updatedAt: new Date().toISOString()
  };

  res.json(liveSession);
});

app.get('/api/comments', (req, res) => {
  res.json({ comments });
});

app.post('/api/comments', (req, res) => {
  const { author, email, message } = req.body;

  if (!author || !author.trim() || !email || !email.trim() || !message || !message.trim()) {
    return res.status(400).json({
      message: 'Author, email, and message are required.'
    });
  }

  const newComment = {
    id: `${Date.now()}-${Math.round(Math.random() * 100000)}`,
    author: author.trim(),
    email: email.trim(),
    message: message.trim(),
    createdAt: new Date().toISOString(),
    approved: false
  };

  comments.push(newComment);

  res.status(201).json({
    message: 'Comment created.',
    comment: newComment
  });
});

app.get('/api/admin/comments', (req, res) => {
  res.json({ comments });
});

app.post('/api/book-sesh-music', (req, res) => {
  const payload = req.body;
  const booking = {
    id: `${Date.now()}-${Math.round(Math.random() * 100000)}`,
    type: 'music',
    name: payload.name,
    email: payload.email,
    genre: payload.genre || 'Unknown',
    message: payload.message,
    createdAt: new Date().toISOString()
  };

  bookings.push(booking);

  res.status(201).json({
    message: 'Booking submitted successfully.',
    booking
  });
});

app.post('/api/book-sesh-video', (req, res) => {
  const payload = req.body;
  const booking = {
    id: `${Date.now()}-${Math.round(Math.random() * 100000)}`,
    type: 'video',
    name: payload.name,
    email: payload.email,
    message: payload.message,
    createdAt: new Date().toISOString()
  };

  bookings.push(booking);

  res.status(201).json({
    message: 'Booking submitted successfully.',
    booking
  });
});

app.post('/api/book-sesh-beat', (req, res) => {
  const payload = req.body;
  const booking = {
    id: `${Date.now()}-${Math.round(Math.random() * 100000)}`,
    type: 'beat',
    name: payload.name,
    email: payload.email,
    message: payload.message,
    createdAt: new Date().toISOString()
  };

  bookings.push(booking);

  res.status(201).json({
    message: 'Booking submitted successfully.',
    booking
  });
});

app.get('/api/bookings', (req, res) => {
  res.json({ bookings });
});

app.listen(PORT, '127.0.0.1', () => {
  console.log(`Hahrec live backend listening on http://127.0.0.1:${PORT}`);
});
