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



app.listen(8081, () => {
    console.log("Listening on port 8081");
});
