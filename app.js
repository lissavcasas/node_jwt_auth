const express = require('express');
const app = express();
const PORT = 5000;

app.get('/api', (req, res) => {
  res.json({ message: ' Welcome to the API' });
});

// Routes
app.use(require('./routes/api/login'));
app.use(require('./routes/api/posts'));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



