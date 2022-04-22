import chai from 'chai';
import { convert } from './Service';
import { rgb2cmykTestData as testData } from '../../../commons/src/test-data/colors';

chai.config.includeStack = true;
const should = chai.should();

describe('Converter RgbToCmyk test suite', () => {
    testData.forEach((test) => {
        it(`Should convert RGB to CMYK`, () => {
            convert(test.rgbValue).should.deep.equal(test.cmykValue);
        });
    });
});
