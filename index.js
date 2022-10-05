const express = require('express');

const router = require('express').Router()
const app = express();
const port = 8080;

app.get("/", (req, res)=> res.send("Nama : Irwansyah"));
app.get("/", (req, res)=> res.send("Kelas TI-4B"));
app.get("/Makan"(req, res)=> res.send("Udah Makan?"));

app.listen(port, ()=>console.log('Aplikasi Berjalan di port ${port}'));