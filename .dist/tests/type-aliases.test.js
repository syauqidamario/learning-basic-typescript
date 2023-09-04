describe('Type Alias', function () {
    it('should support in typescript', function () {
        const category = {
            id: "1",
            name: "Handphone",
            description: "Contoh"
        };
        const product = {
            id: "1",
            name: "iPhone 7 Plus",
            price: 35000000,
            category: category
        };
        console.info(category);
        console.info(product);
    });
});
export {};
