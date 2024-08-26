import express from 'express';
//if we want to update this as it changes, we should probably use nodemon to hot-reload the server.
import {resumedata, functionalResumeData} from "../src/resumedata.mjs";
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

        // Retrieve the 'layout' query parameter
        const layout = req.query.layout || 'default';

        // Default data to send
        let dataToSend = resumedata;

        // Check the value of 'layout' and adjust the response accordingly
        // Send the appropriate JSON response
        if (layout === 'functional') {
            dataToSend = functionalResumeData; // Assume functionalData is the alternative JSON data
        } else if (layout === 'default') {
            // If the layout is provided but is not recognized, return a 500 error
        } else {
            return res.status(500).send('Invalid layout parameter');
        }

        res.status(200).json(dataToSend);
    } catch (error) {
        console.error('Error loading resumedata.mjs:', error);
        res.status(500).send('Error loading data');
    }
});

app.use('/resumedata', express.static(path.join(path.dirname(fileURLToPath(import.meta.url)), '../resumedata')));

const PORT = process.env.JSON_SERVER_PORT || 3002;
app.listen(PORT, () => {
    console.log(`JSON server is running on http://localhost:${PORT}/`);
});