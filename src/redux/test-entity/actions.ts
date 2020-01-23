import { Action } from "redux";

export const CREATE_ENTITY = 'CREATE_ENTITY';

export interface CreateEntityAction extends Action<typeof CREATE_ENTITY> {
    type: typeof CREATE_ENTITY;
    id: number;
}

export const createTestEntity = (id: number): CreateEntityAction => {
    return {type: CREATE_ENTITY, id};
};
