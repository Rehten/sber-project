import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { createTestEntity } from "./actions";
import { AppState } from "../index";
import {TestEntityJSON} from "./types";

export const thunkPostEntity = (
  id: number
): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  try {
      const asyncResp: TestEntityJSON = await exampleAPI();

      dispatch(
          createTestEntity(asyncResp.id)
      );
  } catch (e) {
      console.error(e);
  }
};

function exampleAPI(): Promise<TestEntityJSON> {
  return new Promise(resolve => setTimeout(() => resolve({
      id: Math.round(Math.random() * 100000),
      isEditable: true
  }), 2000));
}
