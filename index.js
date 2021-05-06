const express = require('express');
const port = process.env.PORT || 5000;
const app = express();


app.use(express.static(__dirname + '/public'));


app.get('/', async (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
});
app.get('/blog-single', async (req, res) => {
    res.sendFile(__dirname + '/public/blog-single.html')
});
app.get('/blog', async (req, res) => {
    res.sendFile(__dirname + '/public/blog.html')
});
app.get('/menu', async (req, res) => {
    res.sendFile(__dirname + '/public/menu.html')
});
app.get('/reservation', async (req, res) => {
    res.sendFile(__dirname + '/public/reservation.html')
});
app.get('/contact', async (req, res) => {
    res.sendFile(__dirname + '/public/contact.html')
});


app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
});