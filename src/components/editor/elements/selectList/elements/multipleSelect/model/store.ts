import {BaseMultipleSelectListEditorElementDataStore} from "../../../model/store";
import {MULTIPLE_SELECT_INPUT} from "../../../../../../../consts/elementsTypes";

export class MultipleSelectEditorElementDataStore extends BaseMultipleSelectListEditorElementDataStore {
    constructor() {
        super(MULTIPLE_SELECT_INPUT, "Select label");
    }
}