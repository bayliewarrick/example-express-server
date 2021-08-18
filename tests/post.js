let chai = require('chai');
let chaiHttp = require('chai-http');

let should = chai.should();

chai.use(chaiHttp);

describe('/GET Posts', () => {
    it('Route should send a 200 response containing an array of posts.', (done) => {
        chai.request(`http://localhost:1234`)
        .get('/posts')
        .end(function (err, res) {
            res.should.have.status(200);
            res.body.should.be.an('array');
            done();
        })
    })
});

describe('ADD a post', () => {
    it('Test should post a new test and then check the response body.', (done) => {
        chai.request(`http://localhost:1234`)
        .post('/posts/add-post')
        .set('Content-Type', 'application/json')
        .send({
            "title": "abc",
            "body": "def",
            "category": "ghi"
        })
        .end(function (err, res) {
            res.should.have.status(200);
            res.body.should.be.an('object');
            res.body.should.have.property('title');
            done();
        })
    })
});