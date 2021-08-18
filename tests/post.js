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