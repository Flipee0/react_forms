import {IEditorElement} from "../interfaces/editor";
import {Input, RadioButtonChecked, Checklist, Abc, FormatColorText, ToggleOff, CreditCard, AddCard, Star, KeyboardDoubleArrowRight, Commit} from '@mui/icons-material';
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


export const label_layout: IEditorElement = {
    type: LABEL_LAYOUT,
    control: {
        label: "Label",
        icon: FormatColorText
    },
    edit_component: EditLabelLayout,
    settings_view_component: SettingsLabelLayout
}

export const description_layout: IEditorElement = {
    type: DESCRIPTION_LAYOUT,
    control: {
        label: "Description",
        icon: Abc
    },
    edit_component: EditDescriptionLayout,
    settings_view_component: SettingsDescriptionLayout
}

export const input_field: IEditorElement = {
    type: INPUT_FIELD,
    control: {
        label: "Input Field",
        icon: Input
    },
    edit_component: EditInputField,
    settings_view_component: SettingsInputField
}

export const radio_input: IEditorElement = {
    type: RADIO_INPUT,
    control: {
        label: "Choose one input",
        icon: RadioButtonChecked
    },
    edit_component: EditRadioInput,
    settings_view_component: SettingsRadioInput
}

export const checkbox_input: IEditorElement = {
    type: CHECKBOX_INPUT,
    control: {
        label: "Choose many input",
        icon: Checklist
    },
    edit_component: EditCheckboxInput,
    settings_view_component: SettingsCheckboxInput
}

export const switch_input: IEditorElement = {
    type: SWITCH_INPUT,
    control: {
        label: "Switch",
        icon: ToggleOff
    },
    edit_component: EditSwitchInput,
    settings_view_component: SettingsSwitchInput
}

export const single_select_input: IEditorElement = {
    type: SINGLE_SELECT_INPUT,
    control: {
        label: "Single select",
        icon: CreditCard
    },
    edit_component: EditSingleSelectInput,
    settings_view_component: SettingsSingleSelectInput
}

export const multiple_select_input: IEditorElement = {
    type: MULTIPLE_SELECT_INPUT,
    control: {
        label: "Multiple select",
        icon: AddCard
    },
    edit_component: EditMultipleSelectInput,
    settings_view_component: SettingsMultipleSelectInput
}

export const rating_input: IEditorElement = {
    type: RATING_INPUT,
    control: {
        label: "Rating",
        icon: Star
    },
    edit_component: EditRatingInput,
    settings_view_component: SettingsRatingInput
}

export const transfer_input: IEditorElement = {
    type: TRANSFER_INPUT,
    control: {
        label: "Transfer list",
        icon: KeyboardDoubleArrowRight
    },
    edit_component: EditTransferInput,
    settings_view_component: SettingsTransferInput
}

export const slider_input: IEditorElement = {
    type: SLIDER_INPUT,
    control: {
        label: "Slider",
        icon: Commit
    },
    edit_component: EditSliderInput,
    settings_view_component: SettingsSliderInput
}

export const all_editor_elements = [
    label_layout, description_layout, input_field, radio_input, checkbox_input, switch_input,
    single_select_input, multiple_select_input, rating_input, transfer_input, slider_input
]