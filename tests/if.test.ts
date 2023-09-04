describe ('If Statement', function(){
      it('should support in typescript', function(){
            const grade = 90;
            
            if(grade>80){
                  console.info("Good");
            }
            else if(grade>60){
                  console.info("Not bad");
            }
            else{
                  console.info("Try Again");
            }
      });

      it('should support ternary operator', function() {
            const value = 80;

            const say = value >= 75 ? "Cool" : "Boo";
            console.info(say);
      });

      it('should support switch-case statement', function(){

            function sayHello(name: string):string{
                  switch(name){
                        case "Anri":
                              return "Hi Anri";
                        case "Emi":
                              return "Hi Emi";
                        default:
                              return "Hello";
                  }
            }
            console.info(sayHello("Anri"));
            console.info(sayHello("Emi"));
            console.info(sayHello("Teruaki"));
      });
});