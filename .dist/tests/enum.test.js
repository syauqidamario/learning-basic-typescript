import { AudienceType } from './../src/enum';
describe('Enum', function () {
    it('should support in typescript', function () {
        const audience = {
            id: 1,
            name: "Oto",
            type: AudienceType.VVIP
        };
        console.info(audience);
    });
});
