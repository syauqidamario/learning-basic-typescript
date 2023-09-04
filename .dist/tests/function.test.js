"use strict";
describe('Function', function () {
    it('should support in typescript', function () {
        function sayHello(name) {
            return `Hello ${name}`;
        }
        expect(sayHello("Anri")).toBe("Hello Anri");
        function printHello(name) {
            console.info('Hello ${name}');
        }
        printHello("Eko");
    });
    it('should support default value', function () {
        function sayHello(name = "Anri") {
            return `Hello ${name}`;
        }
        expect(sayHello()).toBe("Hello Anri");
        expect(sayHello("Anri")).toBe("Hello Anri");
    });
    it('should support rest parameter', function () {
        function sum(...values) {
            let total = 0;
            for (const value of values) {
                total += value;
            }
            return total;
        }
        expect(sum(11, 13, 15, 17)).toBe(56);
    });
    it('should support optional parameter', function () {
        function sayHello(firstName, lastName) {
            if (lastName) {
                return `Hello ${firstName} ${lastName}`;
            }
            else {
                return `Hello ${firstName}`;
            }
        }
        expect(sayHello("Anri")).toBe("Hello Anri");
        expect(sayHello("Anri", "Anri Minami")).toBe("Hello Anri Minami");
    });
    it('should support function overloading', function () {
        function callMe(value) {
            if (typeof value === "string") {
                return value.toUpperCase();
            }
            else if (typeof value === "number") {
                return value * 10;
            }
        }
        expect(callMe(10)).toBe(100);
        expect(callMe("Echo")).toBe("ECHO");
    });
    it('should function as parameter', function () {
        function sayHello(name, filter) {
            return `Hello ${filter(name)}`;
        }
        function toUpper(name) {
            return name.toUpperCase();
        }
        expect(sayHello("Anri", toUpper)).toBe("Hello ANRI");
        expect(sayHello("Anri", function (name) {
            return name.toUpperCase();
        })).toBe("Hello ANRI");
        expect(sayHello("Anri", (name) => name.toUpperCase())).toBe("Hello ANRI");
    });
});
