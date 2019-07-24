import { expect } from 'chai';
import * as C from '../src/index'

describe('importing from a linked library', () => {
    it('should compile es6 code from a linked library', () => {
        expect(C.helloWorld).to.be.ok;
        expect(C.helloWorld).to.equal('hello, world!');
    });
});
