import {makeObservable, observable} from "mobx";
import BaseEditorElementDataStore from "../../../model/baseEditorElementDataStore";

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