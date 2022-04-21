import chai from 'chai';
import { convert } from './Service';
import { rgb2cmykTestData as testData } from '../../../commons/src/test-data/colors';

chai.config.includeStack = true;
const should = chai.should();

describe('test suite description', () => {
    testData.forEach((test) => {
        it(`test case description`, () => {
            convert(test.).should.deep.equal(test.TtfCmyk);
        });
    });
});
