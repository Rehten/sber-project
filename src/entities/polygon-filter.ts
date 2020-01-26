import {Severities} from "./severity";
import {BackendTime} from "./backend-time";

export interface PolygonFilter {
    dataFrom: Date;
    dataTo: Date;
    severity: Severities;
    category: string;
}

export interface BackendPolygonFilter {
    dataFrom: BackendTime;
    dataTo: BackendTime;
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
