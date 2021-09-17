const express = require('express');
const app = express();
const path = require('path');
const port = 3030;


/* Recursos estaticos */
app.use(express.static('public'));

app.get('/',(req,res) => res.sendFile(path.join(__dirname, 'views','home.html')));
app.get('/detailProduct',(req,res) => res.sendFile(path.join(__dirname, 'views','detailProduct.html')));
app.get('/login',(req,res) => res.sendFile(path.join(__dirname, 'views','login.html')));
app.get('/register',(req,res) => res.sendFile(path.join(__dirname, 'views','register.html')));
app.get('/carrito',(req,res) => res.sendFile(path.join(__dirname, 'views','carrito.html')));

app.listen(port,() => console.log(`Servidor corriendo en http://localhost:${port}`));