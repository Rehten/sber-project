import {Entity} from "../../types/entity/entity";

export interface TestEntity extends Entity {
    id: number;
}

export interface TestEntityJSON extends Entity {
    id: number;
    isEditable: boolean;
}

