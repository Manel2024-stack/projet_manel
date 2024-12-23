const express = require('express');
const app = express();
const port = 3000;

// Endpoint simple
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(port, () => {
  console.log(`Backend is running at http://localhost:${port}`);
});
