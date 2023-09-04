import { Employee, Manager } from './../src/employee';
import { Seller } from "../src/seller";
import { Person } from '../src/person';

//Menggunakan interface


describe('Interface', function () {
      it('should support in typescript', function() {
            const seller: Seller = {
                  id:1,
                  name: 'Ernie Sabella',
                  nib: '022345',
                  npwp: '03335'
            };
            console.info(seller);
      });
      it('should support function interface', function(){
            interface addFunction{
                  (value1:number, value2: number):number;
            }
            const add: addFunction = (value1: number, value2: number): number => {
                  return value1 + value2;
            };

            expect(add(3,2)).toBe(5);
      });

      it('should support indexable interface', function(){
            interface StringArray{
                  [index:number]: String
            }
            const names: StringArray = ["Anri", "Minami"];
            console.info(names);
      });

      it('should support indexable interface for non number index', function(){
            interface StringDictionary{
                  [
                        key:string
                  ]:string
            }

            const dictionary: StringDictionary = {
                  "name" : "Anri",
                  "address" : "Japan"
            };

            expect(dictionary["name"]).toBe("Anri");
            expect(dictionary["address"]).toBe("Japan");
      });

      it('should support extends interface', function(){
            const employee: Employee = {
                  id:"1",
                  name:"Takeru Sato",
                  division: "IT"
            };

            console.info(employee);

            const manager: Manager = {
                  id:"2",
                  name:"Riki Honoo",
                  division: "IT",
                  numberOfEmployees:12
            };

            console.info(manager);
      });

      it('should support function in interface', function(){

            const person: Person = {
                  name:"Toshiya Fuji",
                  sayHello: function(name: string): string{
                        return `Hello ${name}, my name is ${this.name}`;
                  }
            }
            console.info(person.sayHello("Gaku"));
      });

      it('should support intersection types', function(){
            interface HasName{
                  name: string
            }

            interface HasId{
                  id: string
            }

            type Domain = HasId & HasName;
            //Ini adalah intersection

            const domain: Domain = {
                  id: "2",
                  name: "Kotaro"
            };

            console.info(domain);
      });


      it('should support type assertions', function () {
            const person: any = {
                  name: "Hironobu",
                  age: 32
            };

            const person2 : Person = person as Person;
            // person2.sayHello("Anri");
            console.info(person2);
      });
});

//Indexable Interface adalah interface untuk membuat tipe data berindex, misalnya array atau object