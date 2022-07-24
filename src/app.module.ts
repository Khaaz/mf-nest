import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { RomanDateModule } from "./roman-date/roman-date.module";

@Module({
    imports: [RomanDateModule],
    controllers: [AppController],
    providers: [],
})
export class AppModule {}
