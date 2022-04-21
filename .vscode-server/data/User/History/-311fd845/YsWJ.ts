import chai from 'chai';
import {convert} from './Service';
import { Hex2rgbTestData } from '../../../commons/src/test-data/colors';

chai.config.includeStack = true;
const should = chai.should();

describe('test suite description', () => {
    testData.forEach((test) => {
        it(`test case description`, () => {
            convert(test.input).should.deep.equal(test.expected);
        });
    });
});
