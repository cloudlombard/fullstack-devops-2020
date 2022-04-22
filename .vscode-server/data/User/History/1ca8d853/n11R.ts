import chai from 'chai';
import { convert } from './Service';
import { hsl2hexTestData as testData } from '../../../commons/src/test-data/colors';

chai.config.includeStack = true;
const should = chai.should();

describe('Converter HslToHex test suite', () => {
    testData.forEach((test) => {
        it(`Should convert HSL to HEX`, () => {
            convert(test.hslValue).should.deep.equal(test.hexValue);
        });
    });
});
