import * as C from '../src/index'

describe('importing from a linked library', () => {
    it('should compile es6 code from a linked library', () => {
        expect(C.helloWorld).to.be.ok;
    });
})