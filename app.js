const express = require('express');
const app = express();
const path = require('path');

/**/
app.use(express.static("public"));

/* Rutas */
app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "/views/home.html"));
})
app.get("/hopper", function(req, res) {
	res.sendFile(path.join(__dirname, "/views/hopper.html"));
})
app.get("/turing", function(req, res) {
	res.sendFile(path.join(__dirname, "/views/turing.html"));
})
app.get("/lovelace", function(req, res) {
	res.sendFile(path.join(__dirname, "/views/lovelace.html"));
})
app.get("/hamilton", function(req, res) {
	res.sendFile(path.join(__dirname, "/views/hamilton.html"));
})
app.get("/clarke", function(req, res) {
	res.sendFile(path.join(__dirname, "/views/clarke.html"));
})
app.get("/berners", function(req, res) {
	res.sendFile(path.join(__dirname, "/views/berners.html"));
})
app.get("/babbage", function(req, res) {
	res.sendFile(path.join(__dirname, "/views/babbage.html"));
})

/* Levantando el Servidor */
app.listen(3000, ()=>{
    console.log("Servidor corriendo")
})