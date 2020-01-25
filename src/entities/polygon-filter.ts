import {Severities} from "./severity";
import {TimeJSON} from "./time-json";

export interface PolygonFilter {
    dataFrom: Date;
    dataTo: Date;
    severity: Severities;
    category: string;
}

export interface PolygonFilterJSON {
    dataFrom: TimeJSON;
    dataTo: TimeJSON;
    severity: Severities;
    category: string;
}

export interface PolygonFilterResponse {
    categories?: Array<string>;
    critical?: Array<number>;
    higher?: Array<number>;
    high?: Array<number>;
    mid?: Array<number>;
    low?: Array<number>;
    unknown?: Array<number>;
}
