const express = require('express');
const http = require('http');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const hostname = 'localhost';
const port = '3000';
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.all('/dishes',(req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
});

app.get('/dishes',(req,res,next) => {
    res.end('Will send all the dishs!');
});

app.post('/dishes',(req,res,next) => {
    res.end('will add the dish: ' + req.body.name + ' with detail: ' + req.body.description);
});

app.put('/dishes',(req,res,next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
});

app.delete('/dishes',(req,res,next) => {
    res.end('Deleting all the dishes!');
});




app.get('/dishes/:dishid',(req,res,next) => {
    res.end('Will send details of the dish ' + req.params.dishid + ' to you!');
});

app.post('/dishes/:dishid',(req,res,next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /dishes/' + req.params.dishid);
});

app.put('/dishes/:dishid',(req,res,next) => {
    res.write('Updating the dish: ' + req.params.dishid + '\n');
    res.end('Will update the dish: ' + req.body.name + ' with details: ' + req.body.description);
});

app.delete('/dishes/:dishid',(req,res,next) => {
    res.end('Deleting dish: ' + req.params.dishid);
});

app.use((req,res,next)=> {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>This is an express server</h1></body></html>');
});

const server = http.createServer(app);
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});

