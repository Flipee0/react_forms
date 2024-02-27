import {makeObservable, observable} from "mobx";
import BaseEditorElementDataStore from "./baseEditorElementDataStore";
import {FC} from "react";
import {IBaseEditorElementProps} from "../elements/elementProps";
import {
    CHECKBOX_INPUT,
    DESCRIPTION_LAYOUT,
    INPUT_FIELD,
    LABEL_LAYOUT, MULTIPLE_SELECT_INPUT,
    RADIO_INPUT, RATING_INPUT, SINGLE_SELECT_INPUT, SLIDER_INPUT, SWITCH_INPUT, TRANSFER_INPUT
} from "../../../consts/elementsTypes";
import WorkAreaLabelLayout from "../elements/layout/elements/labelLayout/ui/WorkAreaLabelLayout";
import SettingsLabelLayout from "../elements/layout/elements/labelLayout/ui/SettingsLabelLayout";
import WorkAreaDescriptionLayout from "../elements/layout/elements/descriptionLayout/ui/WorkAreaDescriptionLayout";
import SettingsDescriptionLayout from "../elements/layout/elements/descriptionLayout/ui/SettingsDescriptionLayout";
import WorkAreaInputField from "../elements/inputField/ui/WorkAreaInputField";
import SettingsInputField from "../elements/inputField/ui/SettingsInputField";
import WorkAreaRadioInput from "../elements/selectList/elements/radioInput/ui/WorkAreaRadioInput";
import SettingsRadioInput from "../elements/selectList/elements/radioInput/ui/SettingsRadioInput";
import WorkAreaCheckboxInput from "../elements/selectList/elements/checkBoxInput/ui/WorkAreaCheckboxInput";
import SettingsCheckboxInput from "../elements/selectList/elements/checkBoxInput/ui/SettingsCheckboxInput";
import WorkAreaSwitchInput from "../elements/switch/ui/WorkAreaSwitchInput";
import SettingsSwitchInput from "../elements/switch/ui/SettingsSwitchInput";
import WorkAreaSingleSelectInput from "../elements/selectList/elements/singleSelectInput/ui/WorkAreaSingleSelectInput";
import SettingsSingleSelectInput from "../elements/selectList/elements/singleSelectInput/ui/SettingsSingleSelectInput";
import WorkAreaMultipleSelectInput from "../elements/selectList/elements/multipleSelect/ui/WorkAreaMultipleSelectInput";
import SettingsMultipleSelectInput from "../elements/selectList/elements/multipleSelect/ui/SettingsMultipleSelectInput";
import {WorkAreaRatingInput} from "../elements/rating/ui/WorkAreaRatingInput";
import {SettingsRatingInput} from "../elements/rating/ui/SettingsRatingInput";
import WorkAreaTransferInput from "../elements/selectList/elements/transferInput/ui/WorkAreaTransferInput";
import SettingsTransferInput from "../elements/selectList/elements/transferInput/ui/SettingsTransferInput";
import WorkAreaSliderInput from "../elements/slider/ui/WorkAreaSliderInput";
import SettingsSliderInput from "../elements/slider/ui/SettingsSliderInput";

export interface IEditorElementConfig {
     type: string
     work_area_component: FC<IBaseEditorElementProps>
     settings_component: FC<IBaseEditorElementProps>
}

export const all_editor_elements: IEditorElementConfig[] = [
    {
        type: LABEL_LAYOUT,
        work_area_component: WorkAreaLabelLayout,
        settings_component: SettingsLabelLayout
    },
    {
        type: DESCRIPTION_LAYOUT,
        work_area_component: WorkAreaDescriptionLayout,
        settings_component: SettingsDescriptionLayout
    },
    {
        type: INPUT_FIELD,
        work_area_component: WorkAreaInputField,
        settings_component: SettingsInputField,
    },
    {
        type: RADIO_INPUT,
        work_area_component: WorkAreaRadioInput,
        settings_component: SettingsRadioInput
    },
    {
        type: CHECKBOX_INPUT,
        work_area_component: WorkAreaCheckboxInput,
        settings_component: SettingsCheckboxInput
    },
    {
        type: SWITCH_INPUT,
        work_area_component: WorkAreaSwitchInput,
        settings_component: SettingsSwitchInput
    },
    {
        type: SINGLE_SELECT_INPUT,
        work_area_component: WorkAreaSingleSelectInput,
        settings_component: SettingsSingleSelectInput
    },
    {
        type: MULTIPLE_SELECT_INPUT,
        work_area_component: WorkAreaMultipleSelectInput,
        settings_component: SettingsMultipleSelectInput
    },
    {
        type: RATING_INPUT,
        work_area_component: WorkAreaRatingInput,
        settings_component: SettingsRatingInput
    },
    {
        type: TRANSFER_INPUT,
        work_area_component: WorkAreaTransferInput,
        settings_component: SettingsTransferInput
    },
    {
        type: SLIDER_INPUT,
        work_area_component: WorkAreaSliderInput,
        settings_component: SettingsSliderInput
    }
]

export default class ElementStore {
    editor_config: IEditorElementConfig
    data: BaseEditorElementDataStore

    constructor(data: BaseEditorElementDataStore) {
        makeObservable(this, {
            editor_config: observable,
            data: observable
        })
        this.data = data
        this.editor_config = all_editor_elements.find((element) => this.data.type === element.type)!
    }
}