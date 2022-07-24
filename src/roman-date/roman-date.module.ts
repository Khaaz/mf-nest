import { Module } from "@nestjs/common";
import { RomanDateController } from "./roman-date.controller";
import { IpService } from "./ip.service";
import { RomanService } from "./roman.service";

@Module({
    controllers: [RomanDateController],
    providers: [IpService, RomanService],
})
export class RomanDateModule {}
