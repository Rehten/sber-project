import {PolygonFilter, PolygonFilterResponse} from "../entities/polygon-filter";
import {Read} from "../types/services/read";
import * as axiosModule from 'axios';
import {AppConfiguration} from "../App.configuration";

class PolygonFilterApi implements Read<PolygonFilterResponse> {
    private readonly axios = axiosModule.default;

    async read(data: PolygonFilter): Promise<PolygonFilterResponse> {
        try {
            const response: Record<string, any> = await this.axios.get(`${AppConfiguration.Backend}/polygon`);

            return response.data as PolygonFilterResponse;
        } catch (e) {
            throw Error(e);
        }
    }
}

const polygonFilterApi: PolygonFilterApi = new PolygonFilterApi();

export default polygonFilterApi;
