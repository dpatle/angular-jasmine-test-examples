import { Example5Pipe } from "./example5.pipe";

describe('Pipe :: Example 5 pipe', () => {
    let upperCasePipe: Example5Pipe;
    beforeEach(() => {
        upperCasePipe = new Example5Pipe();
    });

    it('Should transform string to uppercase', () => {
        expect(upperCasePipe.transform('Example5 Pipe')).toBe('EXAMPLE5 PIPE');
    });
});