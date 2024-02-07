import { BaseTextLayoutEditorElementDataStore } from "../store";
import {LABEL_LAYOUT} from "../../../../../consts/elementsTypes";

export class LabelLayoutEditorElementDataStore extends BaseTextLayoutEditorElementDataStore {
    constructor() {
        super(LABEL_LAYOUT, "Label");
    }
}