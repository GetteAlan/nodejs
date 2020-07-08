const express = require('express');
const bodyParser = require('body-parser');
const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the leaders!');
})
.post((req,res,next) => {
    res.end('will add the leader: ' + req.body.name + ' with detail: ' + req.body.description);
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /leaders');
})
.delete((req,res,next) => {
    res.end('Deleting all the leaders!');
});

leaderRouter.route('/:leaderid')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send the leader ' + req.params.leaderid);
})
.post((req,res,next) => {
    res.statusCode = 403;
    res.end('POST method not supported for /leaders/' + req.params.leaderid);
})
.put((req,res,next) => {
    res.end('Will update the leader' + req.params.leaderid);
})
.delete((req,res,next) => {
    res.end('Will delete the leader ' + req.params.leaderid);
});


module.exports = leaderRouter;