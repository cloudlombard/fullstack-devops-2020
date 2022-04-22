import chai from 'chai';
import { convert } from './Service';
import { hex2hslTestData as testData } from '../../../commons/src/test-data/colors';

chai.config.includeStack = true;
const should = chai.should();

describe('Converter HexToHsl test suite', () => {
    testData.forEach((test) => {
        it(`Should convert HEX to HSL`, () => {
            convert(test.hexValue).should.deep.equal(test.hslValue);
        });
    });
});
