import {Straight} from "../types/services/straight";
import {BackendPolygonFilter, PolygonFilter} from "../entities/polygon-filter";
import {Reverse} from "../types/services/reverse";
import timeConverter from "./time-converter";
import {Time} from "../entities/time";

class PolygonFilterConverter implements
    Straight<BackendPolygonFilter, PolygonFilter>,
    Reverse<BackendPolygonFilter, PolygonFilter>
{
    straight(data: BackendPolygonFilter): PolygonFilter {
        return {
            dataFrom: timeConverter.straight(data.dataFrom).date,
            dataTo: timeConverter.straight(data.dataTo).date,
            severity: data.severity,
            category: data.category
        };
    }

    reverse(data: PolygonFilter): BackendPolygonFilter {
        return {
            dataFrom: timeConverter.reverse(new Time(data.dataFrom)),
            dataTo: timeConverter.reverse(new Time(data.dataTo)),
            severity: data.severity,
            category: data.category
        };
    }
}

const polygonFilterConverter: PolygonFilterConverter = new PolygonFilterConverter();

export default polygonFilterConverter;
