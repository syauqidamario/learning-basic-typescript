"use strict";
describe('Any', function () {
    it('should support in typescript', function () {
        const person = {
            id: 1,
            name: "Anri Minami",
            age: 29
        };
        person.age = 31;
        person.address = "Fukushu, Japan";
        console.info(person);
    });
});
