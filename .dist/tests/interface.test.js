//Menggunakan interface
describe('Interface', function () {
    it('should support in typescript', function () {
        const seller = {
            id: 1,
            name: 'Ernie Sabella',
            nib: '022345',
            npwp: '03335'
        };
        console.info(seller);
    });
    it('should support function interface', function () {
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(3, 2)).toBe(5);
    });
    it('should support indexable interface', function () {
        const names = ["Anri", "Minami"];
        console.info(names);
    });
    it('should support indexable interface for non number index', function () {
        const dictionary = {
            "name": "Anri",
            "address": "Japan"
        };
        expect(dictionary["name"]).toBe("Anri");
        expect(dictionary["address"]).toBe("Japan");
    });
    it('should support extends interface', function () {
        const employee = {
            id: "1",
            name: "Takeru Sato",
            division: "IT"
        };
        console.info(employee);
        const manager = {
            id: "2",
            name: "Riki Honoo",
            division: "IT",
            numberOfEmployees: 12
        };
        console.info(manager);
    });
    it('should support function in interface', function () {
        const person = {
            name: "Toshiya Fuji",
            sayHello: function (name) {
                return `Hello ${name}, my name is ${this.name}`;
            }
        };
        console.info(person.sayHello("Gaku"));
    });
    it('should support intersection types', function () {
        //Ini adalah intersection
        const domain = {
            id: "2",
            name: "Kotaro"
        };
        console.info(domain);
    });
    it('should support type assertions', function () {
        const person = {
            name: "Hironobu",
            age: 32
        };
        const person2 = person;
        // person2.sayHello("Anri");
        console.info(person2);
    });
});
export {};
//Indexable Interface adalah interface untuk membuat tipe data berindex, misalnya array atau object
