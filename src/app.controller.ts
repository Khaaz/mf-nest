import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
    @Get()
    getDefault(): string {
        return "Hello World!!";
    }
}
