import {Straight} from "../types/services/straight";
import {BackendPolygonEntity, PolygonEntity} from "../entities/polygon-entity";
import {Reverse} from "../types/services/reverse";
import timeConverter from "./time-converter";
import {Time} from "../entities/time";

class PolygonEntityConverter implements
    Straight<BackendPolygonEntity, PolygonEntity>,
    Reverse<BackendPolygonEntity, PolygonEntity>
{
    straight(data: BackendPolygonEntity): PolygonEntity {
        return {
            dataFrom: timeConverter.straight(data.dataFrom).date,
            dataTo: timeConverter.straight(data.dataTo).date,
            severity: data.severity,
            category: data.category
        };
    }

    reverse(data: PolygonEntity): BackendPolygonEntity {
        return {
            dataFrom: timeConverter.reverse(new Time(data.dataFrom)),
            dataTo: timeConverter.reverse(new Time(data.dataTo)),
            severity: data.severity,
            category: data.category
        };
    }
}

const polygonEntityConverter: PolygonEntityConverter = new PolygonEntityConverter();

export default polygonEntityConverter;
