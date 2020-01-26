import {Severities} from "./severity";
import {BackendTime} from "./backend-time";

export interface PolygonEntity {
    dataFrom: Date;
    dataTo: Date;
    severity: Severities;
    category: string;
}

export interface BackendPolygonEntity {
    dataFrom: BackendTime;
    dataTo: BackendTime;
    severity: Severities;
    category: string;
}

export interface PolygonData {
    entities: Array<PolygonEntity>;
    total: number;
}

export interface BackendPolygonData {
    entities: Array<BackendPolygonEntity>;
    total: number;
}
