import {BaseTextLayoutEditorElementDataStore} from "../store";
import {DESCRIPTION_LAYOUT} from "../../../../../consts/elementsTypes";

export class DescriptionLayoutEditorElementDataStore extends BaseTextLayoutEditorElementDataStore {
    constructor() {
        super(DESCRIPTION_LAYOUT, "Description");
    }
}