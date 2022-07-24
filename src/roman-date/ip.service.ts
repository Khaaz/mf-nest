import { Injectable } from "@nestjs/common";

import Requester from "../utils/Requester";
import { IpResponse } from "./interfaces/IpResponse";

@Injectable()
export class IpService {
    private readonly URL = "https://api64.ipify.org?format=json";

    async fetchIp(): Promise<string> {
        const response = await Requester.get<IpResponse>(this.URL);

        return response.ip as string;
    }
}
