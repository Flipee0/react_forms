import {BaseMultipleSelectListEditorElementDataStore} from "../store";
import {CHECKBOX_INPUT} from "../../../../../consts/elementsTypes";

export class CheckboxEditorElementDataStore extends BaseMultipleSelectListEditorElementDataStore {
    constructor() {
        super(CHECKBOX_INPUT, "Checkbox label");
    }
}