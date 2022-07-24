import { RomanParser } from "./RomanParser";
import { Injectable } from "@nestjs/common";

@Injectable()
export class RomanService {
    private readonly romanParser = new RomanParser();

    /**
     * Parse a date into a roman date
     *
     * @param date
     * @returns
     */
    parseDate(date: Date): string {
        const romanDate = [
            this.romanParser.parse(date.getDate()),
            this.romanParser.parse(date.getMonth() + 1),
            this.romanParser.parse(date.getFullYear()),
        ];
        return romanDate.join(".");
    }
}
