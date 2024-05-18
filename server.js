const express = require('express');
const app = express();
const path = require('path');

// Middleware to log all requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });

// Serve static files from the "public" directory
app.use('/drawings', express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.send('Hello World!');
  });



// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});