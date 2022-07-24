import { Test, TestingModule } from "@nestjs/testing";
import { RomanService } from "./roman.service";

describe("RomanService", () => {
    let service: RomanService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [RomanService],
        }).compile();

        service = module.get<RomanService>(RomanService);
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });

    it("nominal case", () => {
        expect(service.parseDate(new Date("1998/02/11"))).toEqual(
            "XI.II.MCMXCVIII",
        );
    });

    it("2000/01/01 case", () => {
        expect(service.parseDate(new Date("2000/01/01"))).toEqual("I.I.MM");
    });

    it("1999/12/31 case", () => {
        expect(service.parseDate(new Date("1999/12/31"))).toEqual(
            "XXXI.XII.MCMXCIX",
        );
    });

    it("2022/02/28 case", () => {
        expect(service.parseDate(new Date("2022/02/28"))).toEqual(
            "XXVIII.II.MMXXII",
        );
    });

    it("works with text", () => {
        expect(service.parseDate(new Date("25 february 2022"))).toEqual(
            "XXV.II.MMXXII",
        );
    });
});
