"use strict";
describe('Object', function () {
    it('should support in typescript', function () {
        const person = {
            id: "2",
            name: "Rinne"
        };
        console.info(person);
        person.id = "3";
        person.name = "Oto";
        console.info(person);
    });
});
