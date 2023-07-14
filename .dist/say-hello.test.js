import { sayHello } from "./say-hello";
describe('sayHello', function () {
    it('should return hello Syauqi', function () {
        expect(sayHello('Syauqi')).toBe('Hello Syauqi');
    });
});
