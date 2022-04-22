import chai from 'chai';
import { convert } from './Service';
import { cmyk2hslTestData as testData } from '../../../commons/src/test-data/colors';

chai.config.includeStack = true;
const should = chai.should();

describe('Converter CmykToHsl test suite', () => {
    testData.forEach((test) => {
        it(`Should convert CMYK to HSL`, () => {
            convert(test.cmykValue).should.deep.equal(test.hslValue);
        });
    });
});
