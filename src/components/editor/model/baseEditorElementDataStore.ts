import {makeObservable, observable} from "mobx";

export default class BaseEditorElementDataStore {
    type: string
    constructor(type: string) {
        makeObservable(this, {
            type: observable,
        })
        this.type = type
    }
}