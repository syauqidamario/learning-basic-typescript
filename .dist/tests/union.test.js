"use strict";
describe('Union Type', function () {
    it('should support in typescript', function () {
        let sample = "Rinne";
        console.info(sample);
        sample = 99;
        console.info(sample);
        sample = true;
        console.info(sample);
    });
    it('should support typeof operator', function () {
        function process(value) {
            if (typeof value === "string") {
                return value.toUpperCase();
            }
            else if (typeof value === "number") {
                return value + 2;
            }
            else {
                return !value;
            }
        }
        expect(process("Rinne")).toBe("RINNE");
        expect(process(99)).toBe(101);
        expect(process(true)).toBe(false);
    });
});
//Menggunakan Union Type
//Hati2 saat memanggil method pada variabel, karena bisa aja tipe data berubah
//Lebih baik melakukan pengecekan sebelum memanggil method
