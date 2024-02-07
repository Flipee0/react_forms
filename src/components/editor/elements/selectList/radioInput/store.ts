import {BaseSingleSelectListEditorElementDataStore} from "../store";
import {RADIO_INPUT} from "../../../../../consts/elementsTypes";

export class RadioEditorElementDataStore extends BaseSingleSelectListEditorElementDataStore {
    constructor() {
        super(RADIO_INPUT, "Radio label");
    }
}