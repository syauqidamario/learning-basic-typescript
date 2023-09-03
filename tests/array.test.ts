describe('Array', function(){
      it('should same with javascript', function () {
            const names: string[] = ["Hotaro", "Rinne", "Spanner"];
            const values: number[] = [1, 9, 10];
            console.info(names);
            console.info(values);
      });

      it('should support readonly array', function(){
            const hobbies: ReadonlyArray<string>=["Membaca", "Menulis"];
            console.info(hobbies);
      });

      it('should support tuple', function () {
            const person : readonly[string, string, number] = ["Rinne", "Hotaro", 5];
            console.info(person);

            console.info(person[0]);
            console.info(person[1]);
            console.info(person[2]);
            // person[0] = "Budi";
      });
});