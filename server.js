const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the "public" directory
app.get('/drawings', (req, res) => {
    app.send("/public/index.html");
});

app.get('/', (req, res) => {
    res.send('Hello World!');
  });



// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});