describe('Optional Parameter', function () {
    it('should support null and undefined', function () {
        function helloThere(name) {
            if (name) {
                console.info('Hello ${name}');
            }
            else {
                console.info('Hello');
            }
        }
        helloThere("There");
        const name = undefined;
        helloThere(name);
    });
});
export {};
