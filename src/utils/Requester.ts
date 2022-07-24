import axios from "axios";

class Requester {
    /**
     * Fetch an external ressource with axios
     *
     * @template T
     * @param url The url to fetch
     * @returns The data
     */
    async get<T>(url: string): Promise<T> {
        const response = await axios(url);
        const data = response.data;
        return data as T;
    }
}

/* export a singleton of requester
 * Requester is just a wrapper over the choosen HTTP request library
 * It allows to either easily switch HTTP request library or Mock the Requester for testing purposes
 * It potentially makes it easier to refactor to node native fetch implementation coming in future node version (already available in 17.5)
 */
export default new Requester();
