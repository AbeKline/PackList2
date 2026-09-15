const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

const DATA_DIR = path.join(__dirname, 'data');
const DATA_FILE = path.join(DATA_DIR, 'items.json');
const CONFIG_FILE = path.join(DATA_DIR, 'config.json'); // New config file

app.use(express.json());
app.use(express.static('public'));

if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR);
if (!fs.existsSync(DATA_FILE)) fs.writeFileSync(DATA_FILE, JSON.stringify([]));

// Ensure config file exists with an empty travelers array
if (!fs.existsSync(CONFIG_FILE)) {
    fs.writeFileSync(CONFIG_FILE, JSON.stringify({ travelers: [] }));
}

// Routes for the Packing List
app.get('/api/items', (req, res) => {
    res.json(JSON.parse(fs.readFileSync(DATA_FILE)));
});
app.post('/api/items', (req, res) => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(req.body, null, 2));
    res.json({ success: true });
});

// Routes for the Traveler Configurations
app.get('/api/config', (req, res) => {
    res.json(JSON.parse(fs.readFileSync(CONFIG_FILE)));
});
app.post('/api/config', (req, res) => {
    fs.writeFileSync(CONFIG_FILE, JSON.stringify(req.body, null, 2));
    res.json({ success: true });
});

app.listen(PORT, () => {
    console.log(`Packing list app running on port ${PORT}`);
});