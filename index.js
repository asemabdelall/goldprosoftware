const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: "srv676.hstgr.io",
    user: "u664092895_goldprosoftware",
    password: "Gold.5599",
    database: "u664092895_goldprosoftware",
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed: ', err.stack);
        return;
    }
    console.log('Connected to database.');
});

app.get('/fire', (req, res) => {
    const sql = "SELECT * FROM productss WHERE type = 'fire'";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing query: ', err);
            return res.status(500).json({ error: err.message });
        }
        console.log('Data retrieved for /fire: ', data);
        return res.json(data);
    });
});

app.get('/hvac', (req, res) => {
    const sql = "SELECT * FROM productss WHERE type = 'hvac'";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing query: ', err);
            return res.status(500).json({ error: err.message });
        }
        console.log('Data retrieved for /hvac: ', data);
        return res.json(data);
    });
});

app.get('/scents', (req, res) => {
    const sql = "SELECT * FROM productss WHERE type = 'scents'";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing query: ', err);
            return res.status(500).json({ error: err.message });
        }
        console.log('Data retrieved for /scents: ', data);
        return res.json(data);
    });
});

app.get('/shutter', (req, res) => {
    const sql = "SELECT * FROM productss WHERE type = 'shutter'";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing query: ', err);
            return res.status(500).json({ error: err.message });
        }
        console.log('Data retrieved for /shutter: ', data);
        return res.json(data);
    });
});

app.get('/elc', (req, res) => {
    const sql = "SELECT * FROM productss WHERE type = 'elc'";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing query: ', err);
            return res.status(500).json({ error: err.message });
        }
        console.log('Data retrieved for /elc: ', data);
        return res.json(data);
    });
});

app.get('/water', (req, res) => {
    const sql = "SELECT * FROM productss WHERE type = 'water'";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing query: ', err);
            return res.status(500).json({ error: err.message });
        }
        console.log('Data retrieved for /water: ', data);
        return res.json(data);
    });
});

app.get('/ro', (req, res) => {
    const sql = "SELECT * FROM productss WHERE type = 'ro'";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing query: ', err);
            return res.status(500).json({ error: err.message });
        }
        console.log('Data retrieved for /ro: ', data);
        return res.json(data);
    });
});

app.get('/kit', (req, res) => {
    const sql = "SELECT * FROM productss WHERE type = 'kit'";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing query: ', err);
            return res.status(500).json({ error: err.message });
        }
        console.log('Data retrieved for /kit: ', data);
        return res.json(data);
    });
});

app.get('/se', (req, res) => {
    const sql = "SELECT * FROM productss WHERE type = 'se'";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing query: ', err);
            return res.status(500).json({ error: err.message });
        }
        console.log('Data retrieved for /se: ', data);
        return res.json(data);
    });
});

app.get('/ve', (req, res) => {
    const sql = "SELECT * FROM productss WHERE type = 've'";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing query: ', err);
            return res.status(500).json({ error: err.message });
        }
        console.log('Data retrieved for /ve: ', data);
        return res.json(data);
    });
});

app.listen(8081, () => {
    console.log("Listening on port 8081");
});
