//import mongo data model here e.g. `import Graduate  from '../graduate.model.js';`

// Requure the testing dependencies
import chai from 'chai';
import { expect } from 'chai';
import chaiHttp from 'chai-http';

//require other code for testing
import server from '../app.js';
// import testGraduate from '../testGraduate.json' assert {type: "json"};

chai.use(chaiHttp);

describe(`Testing requests on the database`, () => {

    // Need mongo data model and for app.js to implement mongoose db connection before can implement this.  

    // beforeEach(async () => {
    //     await Graduate.deleteMany()
    //         .then(() => console.log(`Database cleared`))
    //         .catch(error => {
    //             console.log(`Error clearing`);
    //             throw new Error();
    //         });

    //     await Graduate.insertMany(testGraduate)
    //         .then(() => console.log(`Database populated with test Todos`))
    //         .catch(error => {
    //             console.log(`Error inserting`);
    //             throw new Error();
    //         });
    // });

    describe(`GET - '/graduates'`, () => {
        it(`should return all of the graduates as an array`, async () => {
            const res = await chai.request(server)
                .get(`/graduates`)
                .send();

            expect(res).to.have.status(200);
            expect(res.body).to.be.an(`array`);
            expect(res.body.length).to.be.equal(1) // TODO - replace hard coded 1 with something that will match number of testGraduates added to db in beforeEach().
        })
    })

});
