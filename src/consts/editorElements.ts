import EditInputField from "../components/editor/elements/inputField/EditInputField";
import EditRadioInput from "../components/editor/elements/selectList/radioInput/EditRadioInput";
import EditCheckboxInput from "../components/editor/elements/selectList/checkBoxInput/EditCheckboxInput";
import {
    CHECKBOX_INPUT,
    DESCRIPTION_LAYOUT, INPUT_FIELD,
    LABEL_LAYOUT,
    MULTIPLE_SELECT_INPUT,
    RADIO_INPUT, RATING_INPUT,
    SINGLE_SELECT_INPUT, SLIDER_INPUT, SWITCH_INPUT, TRANSFER_INPUT
} from "./elementsTypes";
import SettingsRadioInput from "../components/editor/elements/selectList/radioInput/SettingsRadioInput";
import SettingsCheckboxInput from "../components/editor/elements/selectList/checkBoxInput/SettingsCheckboxInput";
import EditLabelLayout from "../components/editor/elements/layout/labelLayout/EditLabelLayout";
import EditDescriptionLayout from "../components/editor/elements/layout/descriptionLayout/EditDescriptionLayout";
import SettingsLabelLayout from "../components/editor/elements/layout/labelLayout/SettingsLabelLayout";
import SettingsDescriptionLayout from "../components/editor/elements/layout/descriptionLayout/SettingsDescriptionLayout";
import EditSwitchInput from "../components/editor/elements/switch/EditSwitchInput";
import SettingsSwitchInput from "../components/editor/elements/switch/SettingsSwitchInput";
import EditSingleSelectInput from "../components/editor/elements/selectList/singleSelectInput/EditSingleSelectInput";
import EditMultipleSelectInput from "../components/editor/elements/selectList/multipleSelect/EditMultipleSelectInput";
import SettingsSingleSelectInput from "../components/editor/elements/selectList/singleSelectInput/SettingsSingleSelectInput";
import SettingsMultipleSelectInput from "../components/editor/elements/selectList/multipleSelect/SettingsMultipleSelectInput";
import EditRatingInput from "../components/editor/elements/rating/EditRatingInput";
import SettingsRatingInput from "../components/editor/elements/rating/SettingsRatingInput";
import EditTransferInput from "../components/editor/elements/selectList/transferInput/EditTransferInput";
import SettingsTransferInput from "../components/editor/elements/selectList/transferInput/SettingsTransferInput";
import EditSliderInput from "../components/editor/elements/slider/EditSliderInput";
import SettingsSliderInput from "../components/editor/elements/slider/SettingsSliderInput";
import SettingsInputField from "../components/editor/elements/inputField/SettingsInputField";
import {EditorElementConfig} from "../store/editorStore";

export const label_layout: EditorElementConfig = {
    type: LABEL_LAYOUT,
    edit_component: EditLabelLayout,
    settings_view_component: SettingsLabelLayout
}

export const description_layout: EditorElementConfig = {
    type: DESCRIPTION_LAYOUT,
    edit_component: EditDescriptionLayout,
    settings_view_component: SettingsDescriptionLayout
}

export const input_field: EditorElementConfig = {
    type: INPUT_FIELD,
    edit_component: EditInputField,
    settings_view_component: SettingsInputField
}

export const radio_input: EditorElementConfig = {
    type: RADIO_INPUT,
    edit_component: EditRadioInput,
    settings_view_component: SettingsRadioInput
}

export const checkbox_input: EditorElementConfig = {
    type: CHECKBOX_INPUT,
    edit_component: EditCheckboxInput,
    settings_view_component: SettingsCheckboxInput
}

export const switch_input: EditorElementConfig = {
    type: SWITCH_INPUT,
    edit_component: EditSwitchInput,
    settings_view_component: SettingsSwitchInput
}

export const single_select_input: EditorElementConfig = {
    type: SINGLE_SELECT_INPUT,
    edit_component: EditSingleSelectInput,
    settings_view_component: SettingsSingleSelectInput
}

export const multiple_select_input: EditorElementConfig = {
    type: MULTIPLE_SELECT_INPUT,
    edit_component: EditMultipleSelectInput,
    settings_view_component: SettingsMultipleSelectInput
}

export const rating_input: EditorElementConfig = {
    type: RATING_INPUT,
    edit_component: EditRatingInput,
    settings_view_component: SettingsRatingInput
}

export const transfer_input: EditorElementConfig = {
    type: TRANSFER_INPUT,
    edit_component: EditTransferInput,
    settings_view_component: SettingsTransferInput
}

export const slider_input: EditorElementConfig = {
    type: SLIDER_INPUT,
    edit_component: EditSliderInput,
    settings_view_component: SettingsSliderInput
}

export const all_editor_elements = [
    label_layout, description_layout, input_field, radio_input, checkbox_input, switch_input,
    single_select_input, multiple_select_input, rating_input, transfer_input, slider_input
]