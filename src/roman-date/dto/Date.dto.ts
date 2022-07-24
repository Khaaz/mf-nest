import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate } from "class-validator";

export class DateDto {
    @Type(() => Date)
    @IsDate()
    @ApiProperty()
    readonly date: Date;
}
