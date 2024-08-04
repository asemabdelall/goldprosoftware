const express = require("express");
const mysql = require("mysql")
const cors = require("cors")

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "goldpro_software",
})

app.get('/fire', (re, res)=> {
    const sql = "SELECT * FROM PRODUCTSS WHERE type = 'fire'";
    db.query(sql, (err, data)=> {
        return res.json(data)
    })
})
app.get('/hvac', (re, res)=> {
    const sql = "SELECT * FROM PRODUCTSS WHERE type = 'hvac'";
    db.query(sql, (err, data)=> {
        return res.json(data)
    })
})
app.get('/scents', (re, res)=> {
    const sql = "SELECT * FROM PRODUCTSS WHERE type = 'scents'";
    db.query(sql, (err, data)=> {
        return res.json(data)
    })
})
app.get('/shutter', (re, res)=> {
    const sql = "SELECT * FROM PRODUCTSS WHERE type = 'shutter'";
    db.query(sql, (err, data)=> {
        return res.json(data)
    })
})
app.get('/elc', (re, res)=> {
    const sql = "SELECT * FROM PRODUCTSS WHERE type = 'elc'";
    db.query(sql, (err, data)=> {
        return res.json(data)
    })
})
app.get('/water', (re, res)=> {
    const sql = "SELECT * FROM PRODUCTSS WHERE type = 'water'";
    db.query(sql, (err, data)=> {
        return res.json(data)
    })
})
app.get('/ro', (re, res)=> {
    const sql = "SELECT * FROM PRODUCTSS WHERE type = 'ro'";
    db.query(sql, (err, data)=> {
        return res.json(data)
    })
})
app.get('/se', (re, res)=> {
    const sql = "SELECT * FROM PRODUCTSS WHERE type = 'se'";
    db.query(sql, (err, data)=> {
        return res.json(data)
    })
})
app.get('/ve', (re, res)=> {
    const sql = "SELECT * FROM PRODUCTSS WHERE type = 've'";
    db.query(sql, (err, data)=> {
        return res.json(data)
    })
})

app.listen(8081, ()=>{
    console.log("listening::");
})
