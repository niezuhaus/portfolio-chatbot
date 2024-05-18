"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
// Middleware to log all requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
// Serve static files from the "public" directory
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
app.use(express_1.default.static(path_1.default.join(__dirname, '../dist')));
// Serve static files from the "public/drawings" directory when /drawings is requested
app.use('/drawings', express_1.default.static(path_1.default.join(__dirname, '../public', 'drawings')));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});