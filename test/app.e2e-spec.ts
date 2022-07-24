import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication, ValidationPipe } from "@nestjs/common";
import * as request from "supertest";
import { AppModule } from "./../src/app.module";

describe("AppController (e2e)", () => {
    let app: INestApplication;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        app.useGlobalPipes(
            new ValidationPipe({
                transform: true,
            }),
        );
        await app.init();
    });

    it("works on / (GET)", () => {
        return request(app.getHttpServer())
            .get("/")
            .expect(200)
            .expect("Hello World!!");
    });

    it("works on nominal case roman date (GET)", async () => {
        const response = await request(app.getHttpServer()).get(
            "/roman-date?date=1998/02/11",
        );
        expect(response.status).toEqual(200);
        expect(response.body.date).toBeDefined();
        expect(response.body.ip).toBeDefined();
        expect(response.body.date).toEqual("XI.II.MCMXCVIII");
    });
});
