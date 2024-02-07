import {makeObservable, observable} from "mobx";
import {BaseMultipleSelectListEditorElementDataStore} from "../store";
import {TRANSFER_INPUT} from "../../../../../consts/elementsTypes";

export class TransferEditorElementDataStore extends BaseMultipleSelectListEditorElementDataStore {
    choices_label: string = "Left label"
    chosen_label: string = "Right label"
    choices_selected_number_label: string = "selected"
    chosen_selected_number_label: string = "selected"
    enable_move_all: boolean = true

    constructor() {
        super(TRANSFER_INPUT, "Transfer label");
        makeObservable(this, {
            choices_label: observable,
            chosen_label: observable,
            choices_selected_number_label: observable,
            chosen_selected_number_label: observable,
            enable_move_all: observable,
        })
    }
}