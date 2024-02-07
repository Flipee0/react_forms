import {BaseEditorInputsElementDataStore} from "../../../../store/editorStore";
import {makeObservable, observable, override} from "mobx";
import {RATING_INPUT} from "../../../../consts/elementsTypes";

export class RatingEditorElementDataStore extends BaseEditorInputsElementDataStore {
    default_value: number | null = null
    rating_label: string = "Rating label"
    max_rating: number = 5
    constructor() {
        super(RATING_INPUT);
        makeObservable(this, {
            default_value: override,
            rating_label: observable,
            max_rating: observable,
        })
    }
}