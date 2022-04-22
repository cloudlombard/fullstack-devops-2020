import chai from 'chai';
import chaiHttp from 'chai-http';
import * as config from '../../server-config.json'
import { hex2rgbTestData as testData } from '../../../commons/src/test-data/colors';

chai.config.includeStack = true;
const should = chai.should();
chai.use(chaiHttp);

describe('REST API HexToRgb test suite', () => {
    const url = process.env.npm_config_rgb2hex_test_url || `http://localhost:${config.port}`;
    console.log('Test URL: ' + url);

    testData.forEach((test) => {
        it(`Should include the value of the query (HEX) converted to RGB in the response body`, (done) => {
            chai.request(url)
                .get('/')
                .query(`color=${JSON.stringify(test.hexValue)}`)
                .end((err, res) => {
                    should.not.exist(err);
                    res.should.have.status(200);
                    res.body.should.deep.equal(test.rgbValue);
                    done();
                });
        });
    });
});