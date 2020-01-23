import { Action } from "redux";
import {TestEntity} from "./types";
import {CREATE_ENTITY, CreateEntityAction} from "./actions";

export const testEntityReducer = (state: TestEntity | null = null, action: Action<string>): TestEntity | null => {
    switch (action.type) {
        case CREATE_ENTITY:
            return {
                id: (action as CreateEntityAction).id
            };
        default:
            return state;
    }
};
