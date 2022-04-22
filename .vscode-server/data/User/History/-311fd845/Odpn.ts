import chai from 'chai';
import { convert } from './Service';
import { hex2rgbTestData as testData } from '../../../commons/src/test-data/colors';

chai.config.includeStack = true;
const should = chai.should();

describe('Converter HexToRgb test suite', () => {
    testData.forEach((test) => {
        it(`test case description`, () => {
            convert(test.hexValue).should.deep.equal(test.rgbValue);
        });
    });
});
