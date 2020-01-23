import {Create} from "./create";
import {Read} from "./read";
import {Update} from "./update";
import {Delete} from "./delete";

export interface CRUD<I, O>
    extends Create<I, O>, Read<O>, Update<I, O>, Delete<O> {
}
