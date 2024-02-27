import {makeAutoObservable} from 'mobx'
import BaseEditorElementDataStore from "./baseEditorElementDataStore";
import ElementStore from "./elementStore";

class EditorStore {
    elements: ElementStore[] = []
    selected: number | null = null

    constructor() {
        makeAutoObservable(this)
    }

    addElement(element: BaseEditorElementDataStore) {
        const new_length = this.elements.push(new ElementStore(element))
        this.selected = new_length - 1
    }

    getElement(index: number) {
        return this.elements[index]
    }

    getElementData(index: number) {
        return this.getElement(index).data
    }
}

const editorStore = new EditorStore()
export default editorStore