import { BaseEditorElementDataStore } from "../../../../store/editorStore";
import {makeObservable, observable} from "mobx";

export class BaseTextLayoutEditorElementDataStore extends BaseEditorElementDataStore {
    value: string
    constructor(type: string, value: string) {
        super(type);
        makeObservable(this, {
            value: observable,
        })
        this.value = value
    }
}