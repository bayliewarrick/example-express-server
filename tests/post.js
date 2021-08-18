let chai = require('chai');
let chaiHttp = require('chai-http');

let should = chai.should();

chai.use(chaiHttp);

describe('/GET Posts', () => {
    it('it should get all of the posts.', (done) => {
        chai.request(`http://localhost:1234`)
        .get('/posts')
        .end(function (err, res) {
            res.should.have.status(200);
            done();
        })
    })
});