import { sayHello } from "../src/say-hello";

describe('Optional Parameter', function(){
      it('should support null and undefined', function(){

            function helloThere(name?:string | null){
                  if(name){
                        console.info('Hello ${name}');
                  }else{
                        console.info('Hello');
                  }
            }
            helloThere("There");
            const name: string | undefined = undefined;
            helloThere(name);
            helloThere(null);
      });
});