const express = require('express')
const promClient = require('prom-client');

const app = express()

const numberOfSuccess = new promClient.Counter({
  name: 'number_of_success',
  help: 'Total number of success requests'
});

const numberOfFailures = new promClient.Counter({
  name: 'number_of_failures',
  help: 'Total number of failed requests'
});

app.get('/', function (req, res) {
  res.json({
    message: 'success'
  })
  numberOfSuccess.inc(1);
})

app.get('/fail', function (req, res) {
  res.json({
    message: 'failed'
  })
  numberOfFailures.inc(1);
})

app.get('/metrics', function (req, res) {
  res.end(promClient.register.metrics());
})

module.exports = app;
