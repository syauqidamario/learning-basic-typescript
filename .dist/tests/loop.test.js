"use strict";
describe('Loop', function () {
    it('should support for loop', function () {
        const names = ["Junji", "Michihiro", "Kazuo"];
        for (let i = 0; i < names.length; i++) {
            console.info(names[i]);
        }
        for (const name of names) {
            console.info(name);
        }
        for (const index in names) {
            console.info(names[index]);
        }
    });
    //while loops
    it('should support while loops', function () {
        let counter = 0;
        while (counter < 1000) {
            console.info(counter);
            counter++;
        }
    });
    //do while loops
    it('should support do while loop', function () {
        let counter = 0;
        do {
            console.info(counter);
            counter++;
        } while (counter < 1000);
    });
    it('should support break and continue', function () {
        let counter = 0;
        do {
            counter++;
            if (counter == 20) {
                break;
            }
            if (counter % 2 == 0) {
                continue;
            }
            console.info(counter);
        } while (true);
    });
});
