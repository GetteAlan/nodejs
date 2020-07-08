const express = require('express');
const bodyParser = require('body-parser');
const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the dishs!');
})
.post((req,res,next) => {
    res.end('will add the dish: ' + req.body.name + ' with detail: ' + req.body.description);
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
})
.delete((req,res,next) => {
    res.end('Deleting all the dishes!');
});

dishRouter.route('/:dishid')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send the dish ' + req.params.dishid);
})
.post((req,res,next) => {
    res.statusCode = 403;
    res.end('POST method not supported for /dishes/' + req.params.dishid);
})
.put((req,res,next) => {
    res.end('Will update the dish' + req.params.dishid);
})
.delete((req,res,next) => {
    res.end('Will delete the dish ' + req.params.dishid);
});

module.exports = dishRouter;