const express = require('express');
const bodyParser = require('body-parser');
const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the promotions!');
})
.post((req,res,next) => {
    res.end('will add the promotion: ' + req.body.name + ' with detail: ' + req.body.description);
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete((req,res,next) => {
    res.end('Deleting all the promotions!');
});

promoRouter.route('/:promoid')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send the promo ' + req.params.promoid);
})
.post((req,res,next) => {
    res.statusCode = 403;
    res.end('POST method not supported for /promotions/' + req.params.promoid);
})
.put((req,res,next) => {
    res.end('Will update the promotion' + req.params.promoid);
})
.delete((req,res,next) => {
    res.end('Will delete the promotion ' + req.params.promoid);
});

module.exports = promoRouter;