import { IpService } from "./ip.service";
import { RomanService } from "./roman.service";
import { Test, TestingModule } from "@nestjs/testing";
import { RomanDateController } from "./roman-date.controller";

describe("RomanDateController", () => {
    let controller: RomanDateController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [RomanDateController],
            providers: [IpService, RomanService],
        }).compile();

        controller = module.get<RomanDateController>(RomanDateController);
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
    });
});
