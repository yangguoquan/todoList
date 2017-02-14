const webpack = require('webpack');
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config');
const port = 8080;
const app = express();
const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: '/dist/'
}));
app.use(webpackHotMiddleware(compiler));
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/src/index.html`);
});
app.listen(port, err => {
  if (err) {
    console.log(err);
  } else {
    console.log('Page is running at: http://local.forexmaster.cn:8080/index');
  }
});
