import express from 'express';
//if we want to update this as it changes, we should probably use nodemon to hot-reload the server.
import {resumedata} from "../src/resumedata.mjs";
import { fileURLToPath } from 'url';
import path from "path";
import cors from "cors";

const app = express();

const allowedOrigins = [
    'http://localhost:3000',
    'http://host.docker.internal:3000'
];

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));

// Disable ETag and Last-Modified
app.disable('etag');


// Serve the JSON data at the /json endpoint
app.get('/', async (req, res) => {
    try {
        // Explicitly set headers to avoid caching in the browser
        res.setHeader('Cache-Control', 'no-store');
        res.setHeader('Pragma', 'no-cache');
        res.setHeader('Expires', '0');
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(resumedata);
    } catch (error) {
        console.error('Error loading resumedata.mjs:', error);
        res.status(500).send('Error loading data');
    }
});

app.use('/resumedata', express.static(path.join(path.dirname(fileURLToPath(import.meta.url)), '../resumedata')));
// if the above is not robust enough ...
// app.get('/resumedata', (req, res) => {
//     const resumeFile = req.query.file; // e.g., ?file=resume1
//     if (!resumeFile) {
//         return res.status(400).send('File query parameter is required');
//     }
//
//     const filePath = path.join(__dirname, 'resumedata', `${resumeFile}.json`);
//
//     res.sendFile(filePath, err => {
//         if (err) {
//             console.error("File not found:", err);
//             res.status(404).send('File not found');
//         }
//     });
// });

const PORT = process.env.JSON_SERVER_PORT || 3002;
app.listen(PORT, () => {
    console.log(`JSON server is running on http://localhost:${PORT}/`);
});