import {BackendPolygonData, PolygonEntity, PolygonData} from "../entities/polygon-entity";
import {Read} from "../types/services/read";
import * as axiosModule from 'axios';
import {AppConfiguration} from "../App.configuration";
import polygonEntityConverter from "./polygon-entity-converter";

class PolygonFilterApi implements Read<PolygonData> {
    private readonly axios = axiosModule.default;

    async read(data: PolygonEntity): Promise<PolygonData> {
        try {
            const {entities, total}: BackendPolygonData = await this.axios
                .post(
                    `${AppConfiguration.Backend}/polygon`,
                    polygonEntityConverter.reverse(data)
                )
                .then(response => response.data as BackendPolygonData);

            return {
                entities: entities.map(entity => polygonEntityConverter.straight(entity)),
                total
            }
        } catch (e) {
            throw Error(e);
        }
    }
}

const polygonFilterApi: PolygonFilterApi = new PolygonFilterApi();

export default polygonFilterApi;
