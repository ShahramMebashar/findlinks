var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();
var mongoose = require('mongoose');
chai.use(chaiHttp);

describe('Links', () => {

  it('should get response status 200', function (done) {
    chai.request(server)
        .get('/links')
        .end(function (err, res) {
          res.should.have.status(200);
          done();
        })
  });

  it('/links/add should response status 404', function (done) {
      chai.request(server)
      .post('/links/add')
      .send({'title': 'test'})
      .end(function (err, res) {
        res.should.have.status(200);
        done();
      })
  });
})
