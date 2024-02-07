import {
    ICheckboxEditorElementData, IMultipleSelectEditorElementData,
    IRadioEditorElementData,
    ISingleSelectEditorElementData, ITransferEditorElementData
} from "../interfaces/editor/data/selectLists";
import {
    CHECKBOX_INPUT,
    DESCRIPTION_LAYOUT, INPUT_FIELD,
    LABEL_LAYOUT, MULTIPLE_SELECT_INPUT,
    RADIO_INPUT, RATING_INPUT,
    SINGLE_SELECT_INPUT, SLIDER_INPUT, SWITCH_INPUT, TRANSFER_INPUT
} from "./elementsTypes";
import {IEditorElementData} from "../interfaces/editor/data/base";
import {IDescriptionLayoutEditorElementData, ILabelLayoutEditorElementData} from "../interfaces/editor/data/textLayout";
import {ISwitchEditorElementData} from "../interfaces/editor/data/switch";
import {IRatingEditorElementData} from "../interfaces/editor/data/rating";
import {ISliderEditorElementData} from "../interfaces/editor/data/sliders";
import {IInputFieldEditorElementData} from "../interfaces/editor/data/inputField";

export const SELECT_INPUT_DEFAULT_OPTION = "Option"

export const EditorElementsDefaultData = [
    {
        type: LABEL_LAYOUT,
        data: {
            value: "Label"
        } as ILabelLayoutEditorElementData
    } as IEditorElementData,
    {
        type: DESCRIPTION_LAYOUT,
        data: {
            value: "Description"
        } as IDescriptionLayoutEditorElementData
    } as IEditorElementData,
    {
        type: INPUT_FIELD,
        data: {
            required: true,
            default_value: "",
            label: "Label",
            description: "Description",
            input_label: "Enter your answer",
            multiline: false
        } as IInputFieldEditorElementData
    } as IEditorElementData,
    {
        type: RADIO_INPUT,
        data: {
            required: true,
            default_value: null,
            label: "Label",
            description: "Description",
            values: [SELECT_INPUT_DEFAULT_OPTION],
            select_label: "Radio label"
        } as IRadioEditorElementData
    } as IEditorElementData,
    {
        type: CHECKBOX_INPUT,
        data: {
            required: true,
            default_value: [],
            label: "Label",
            description: "Description",
            values: [SELECT_INPUT_DEFAULT_OPTION],
            select_label: "Checkbox label"
        } as ICheckboxEditorElementData,
    } as IEditorElementData,
    {
        type: SWITCH_INPUT,
        data: {
            required: false,
            default_value: false,
            label: "Label",
            description: "Description",
            switch_label: "Is it true?"
        } as ISwitchEditorElementData,
    } as IEditorElementData,
    {
        type: SINGLE_SELECT_INPUT,
        data: {
            required: true,
            default_value: "",
            label: "Label",
            description: "Description",
            select_label: "Select item",
            values: [SELECT_INPUT_DEFAULT_OPTION]
        } as ISingleSelectEditorElementData
    } as IEditorElementData,
    {
        type: MULTIPLE_SELECT_INPUT,
        data: {
            required: true,
            default_value: [],
            label: "Label",
            description: "Description",
            select_label: "Select items",
            values: [SELECT_INPUT_DEFAULT_OPTION]
        } as IMultipleSelectEditorElementData,
    } as IEditorElementData,
    {
        type: RATING_INPUT,
        data: {
            required: true,
            default_value: null,
            label: "Label",
            description: "Description",
            rating_label: "Rating label",
            max_rating: 5
        } as IRatingEditorElementData,
    } as IEditorElementData,
    {
        type: TRANSFER_INPUT,
        data: {
            required: true,
            default_value: [],
            label: "Label",
            description: "Description",
            choices_label: "Options",
            chosen_label: "Selected",
            choices_selected_number_label: "selected",
            chosen_selected_number_label: "selected",
            enable_move_all: true,
            values: [SELECT_INPUT_DEFAULT_OPTION],
            select_label: "Transfer label"
        } as ITransferEditorElementData,
    } as IEditorElementData,
    {
        type: SLIDER_INPUT,
        data: {
            required: true,
            default_value: 0,
            label: "Label",
            description: "Description",
            slider_label: "Choose value",
            min_value: 0,
            max_value: 100,
            value_label_display: "auto",
            isRanged: false,
            marks: false,
            step: 1
        } as ISliderEditorElementData,
    } as IEditorElementData
]