import express from 'express';
import path from 'path';
import "./style.css";

const app = express();

// Middleware to log all requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/dist')));

// Serve static files from the "public/drawings" directory when /drawings is requested
app.use('/drawings', express.static(path.join(__dirname, '../public', 'drawings')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});