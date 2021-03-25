// DB
const mongoose = require('mongoose');
const Article = require('../api/database/Article')

// Config Chai
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = require('chai').should();
const expect = chai.expect;
const app = require('../server');
const path = require('path')

chai.use(chaiHttp)

describe('CHAI // CONTROLLER //  fevController', () => {

  // beforeEach((done) => {
  //   Article.deleteOne({}, (err) => { 
  //     done();           
  //   });
  // });

  // Test get /fev
  it(' ChaiRouter // Get Article', (done) => {
    // test route Get
  });

  // Test Post /fev
  it(' ChaiRouter // Post Article', (done) => {
    // Test route Post
  });

  // Test Put /fev/:id
  it(' ChaiRouter // Put Article', (done) => {
    // Test route Put
  });

  it(' ChaiRouter // Delete Article', (done) => {
    // Test route Delete
  });

});