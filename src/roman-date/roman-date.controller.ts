import { DateDto } from "./dto/Date.dto";
import { IpService } from "./ip.service";
import { RomanService } from "./roman.service";
import { Controller, Get, Query } from "@nestjs/common";
import { RomanDateResponseDto } from "./dto/RomanDateResponse.dto";
import { ApiExtraModels, ApiOperation, ApiResponse } from "@nestjs/swagger";

@Controller("roman-date")
export class RomanDateController {
    constructor(
        private readonly romanService: RomanService,
        private readonly ipService: IpService,
    ) {}

    @ApiOperation({
        summary: "Convert a date to its roman representation and adds the ip",
    })
    @ApiResponse({
        status: 200,
        description: "The roman date",
    })
    @ApiResponse({
        status: 400,
        description: "date must be a Date instance",
    })
    @ApiExtraModels(DateDto)
    @ApiExtraModels(RomanDateResponseDto)
    @Get()
    async getRomanDateWithIP(
        @Query() query: DateDto,
    ): Promise<RomanDateResponseDto> {
        const ip = await this.ipService.fetchIp();

        return {
            date: this.romanService.parseDate(query.date),
            ip,
        };
    }
}
