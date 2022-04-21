import chai from 'chai';
import {convert} from './Service';
import { TtfRgb, TtfCmyk } from '../../../commons/src/model/Color';

chai.config.includeStack = true;
const should = chai.should();

describe('test suite description', () => {
    testData.forEach((test) => {
        it(`test case description`, () => {
            convert(test.TtfRgb).should.deep.equal(test.TtfCmyk);
        });
    });
});
