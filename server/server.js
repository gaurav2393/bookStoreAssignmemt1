var express = require('express')
var path = require('path')
var open = require('open')
var webpack = require('webpack')
var config = require('../webpack.dev.config')

// import express from 'express';
// import path from 'path';
// import open from 'open';
// import webpack from 'webpack';
// import config from '../webpack.dev.config';
const compiler = webpack(config);
const port = 3000;
const app = express();

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));
 app.listen(port, function (error) {
    if(error) {
        console.log(error);
    } else {
        open(`http://localhost:${port}`)
    }
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});