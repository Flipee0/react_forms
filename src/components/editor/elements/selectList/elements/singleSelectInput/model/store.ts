import {makeObservable, override} from "mobx";
import {BaseSelectListEditorElementDataStore} from "../../../model/store";
import {SINGLE_SELECT_INPUT} from "../../../../../../../consts/elementsTypes";

export class SingleSelectEditorElementDataStore extends BaseSelectListEditorElementDataStore {
    default_value: number | "" = ""
    constructor() {
        super(SINGLE_SELECT_INPUT, "Select label");
        makeObservable(this, {
            default_value: override
        })
    }
}