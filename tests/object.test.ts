describe('Object', function () {
      it('should support in typescript', function(){
            const person: {id:string, name:string, hobbies?: string[]} = {
                  id:"2",
                  name:"Rinne"
            };

            console.info(person);
            person.id = "3";
            person.name = "Oto";
            console.info(person);
      });
});