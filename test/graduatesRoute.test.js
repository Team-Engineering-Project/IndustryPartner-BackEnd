//import mongo data model here e.g. `import Graduate  from '../graduate.model.js';`

// Requure the testing dependencies
import chai from 'chai';
import { expect } from 'chai';
import chaiHttp from 'chai-http';

//require other code for testing
import server from '../app.js';
import testGraduate from '../testGraduate.json' assert {type: "json"};
import testData from '../testGraduates.js';
// const testGraduatesArray = testData.graduates;
const testGraduatesArray = testData.fullProfiles;

import GraduateProfile from '../models/graduateProfile.model.js';

chai.use(chaiHttp);

describe(`Testing requests on the database`, () => {

    beforeEach(async () => {
        await GraduateProfile.deleteMany()
            .then(() => console.log(`Database cleared`))
            .catch(error => {
                console.log(`Error clearing graduates collection`);
                throw new Error();
            });

        await GraduateProfile.insertMany(testGraduatesArray)
            .then(() => console.log(`Database populated with test graduate profile`))
            .catch(error => {
                console.log(`Error inserting graduate profile`);
                throw new Error();
            });
    });

    describe(`GET - '/graduates'`, () => {
        it(`should receive a response with status code 200`, async () => {
            const res = await chai.request(server)
                .get(`/graduates`)
                .send();

            expect(res).to.have.status(200);
        });

        it(`should return an array`, async () => {
            const res = await chai.request(server)
                .get(`/graduates`)
                .send();

            expect(res.body).to.be.an(`array`);

        });
        it(`should be the correct length`, async () => {
            const res = await chai.request(server)
                .get(`/graduates`)
                .send();


            expect(res.body.length).to.be.equal(testGraduatesArray.length);
        });
    })

})
