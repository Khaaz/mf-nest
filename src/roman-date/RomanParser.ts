export class RomanParser {
    /**
     * Object are not ordered
     * Array is better than Map (or Object) for looping
     *
     * Array of Tuple <Roman representation, number value>
     */
    private readonly table: Array<[string, number]> = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1],
    ];

    /**
     * Parse a numeral into its Roman Numeral representation
     * Various impl: https://stackoverflow.com/questions/9083037/convert-a-number-into-a-roman-numeral-in-javascript
     *
     * @param number
     * @returns The roman numeral representation
     */
    parse(number: number): string {
        let romanNumber = "";
        for (const e of this.table) {
            while (number >= e[1]) {
                romanNumber += e[0];
                number -= e[1];
            }
        }
        return romanNumber;
    }
}
