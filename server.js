const express = require('express');
const request = require('request');
const http = require('http');
const _ = require('lodash');
const bodyParser = require('body-parser');
const logger = require('morgan');
const config = require('./config.js');

const app = new express();

const application = "hitscotty";
const access = "?access_token=" + config.github.access_token;
const root = "https://api.github.com/";

const auth = "?client_id=" + config.github.client_id + "&client_secret=" + config.github.client_secret + "&";
const rootrepo = "https://api.github.com/search/repositories" + auth + "q=user:" + config.github.user + " language:";

// api requests //
const req = url => {
  return {
    headers: {
      'USER-AGENT': application,
      'Content-Type': 'application/json; charset=utf-8'
    },
    uri: url,
    method: 'GET'
  }
};

function getEndpoints(res){
  request(req(root + access), (error, response, body) => {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body)); // Show the HTML for the Google homepage. 
    }
  })
}

function getProjects(res,language){
  request(req(rootrepo + language), (error, response, body) => {
    if(!error && response.statusCode == 200){
      res.json(JSON.parse(body).items);
    }
  });
}

// api requests end //

// middleware //
app.use(express.static('src/client/public/'));
app.use(bodyParser.json());
app.use(logger('dev'))

app.use('/projects', (req,res) => {
  getProjects(res,"javascript");
});

app.use('/endpoints', (req,res) => {
  getEndpoints(res);
});

// middleware end //

app.listen(process.env.PORT || 8000);
console.log("listening on port 8000....");
