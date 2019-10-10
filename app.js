const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: ' Welcome to the API' });
});


const PORT = 5000; 
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});