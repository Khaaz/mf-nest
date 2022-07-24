import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class RomanDateResponseDto {
    @IsString()
    @ApiProperty()
    readonly date: string;

    @IsString()
    @ApiProperty()
    readonly ip: string;
}
