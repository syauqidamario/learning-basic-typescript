import {Category, Product} from "../src/type-aliases";

describe('Type Alias', function(){
      it('should support in typescript', function () {
            const category: Category = {
                  id:"1",
                  name: "Handphone",
                  description:"Contoh"
            };

            const product : Product = {
                  id:"1",
                  name:"iPhone 7 Plus",
                  price: 35000000,
                  category: category
            };

            console.info(category);
            console.info(product);
      });
});