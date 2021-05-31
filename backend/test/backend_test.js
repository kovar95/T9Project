process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();

chai.use(chaiHttp);

const error_message = 'You entered invalid value!'

describe('API Tests', () => {
      describe('Root route test', () => {
            it('API running', (done) => {
            chai.request(server)
                  .get('/')
                  .end((err, res) => {
                        res.should.have.status(200);
                        res.res.should.have.property('text').to.equal('API Running');
                  done();
                  });
            });
      });
      describe('Examples tests', () => {
            it('Only one number', (done) => {
            chai.request(server)
                  .get('/api/phonewords/2')
                  .end((err, res) => {
                        res.should.have.status(422);
                        res.body.should.have.property('error').to.equal('You must enter at least two numbers!')
                  done();
                  });
            });
            it('Letter included', (done) => {
            chai.request(server)
                  .get('/api/phonewords/2a')
                  .end((err, res) => {
                        res.should.have.status(422);
                        res.body.should.have.property('error').to.equal(error_message);
                  done();
                  });
            });
            it('Result length', (done) => {
            chai.request(server)
                  .get('/api/phonewords/999')
                  .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.have.all.keys('allWords','realWords');
                        res.body.should.have.property('allWords').to.have.lengthOf(64);
                        res.body.should.have.property('realWords').to.have.lengthOf(0);
                  done();
                  });
            });
            it('Valid words', (done) => {
                  const realWords = ["ace","bad","cad"]

                  chai.request(server)
                  .get('/api/phonewords/223')
                  .end((err, res) => {
                        res.should.have.status(200);
      
                        res.body.should.have.all.keys('allWords','realWords');
                        res.body.should.have.property('allWords').to.have.lengthOf(27);
                        res.body.should.have.property('realWords').to.have.lengthOf(3);
                        res.body.should.have.property('realWords').to.eql(realWords);
                  done();
                  });
            });
      });
});