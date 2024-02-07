import React from 'react';
import {editorStore} from "../../../../store/editorStore";
import {BaseSelectListEditorElementDataStore} from "./store";
import TextField from "@mui/material/TextField";
import {
    handleAddOptionClick,
    handleDefaultCheckboxValueChange, handleDefaultRadioValueChange,
    handleEditOptionChange,
    handleSelectLabelChange
} from "./handlers";
import {Button, Checkbox, FormControlLabel, FormGroup, Input, Radio, RadioGroup} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {Theme} from "@mui/material/styles";
import {observer} from "mobx-react-lite";

type Props = {
    index: number
}

type SelectsProps = {
    index: number
    theme: Theme
    enableAddButton: boolean
}

export const SettingsSelectLabelField = observer(({index}: Props) => {
    const element = editorStore.getElementData(index) as BaseSelectListEditorElementDataStore

    return (
        <TextField
            label="Select label"
            variant="standard"
            fullWidth
            value={element.select_label}
            onChange={(e) => handleSelectLabelChange(e as React.ChangeEvent<HTMLInputElement>, index)}
        />
    );
});

export const CheckboxValuesForm = observer(({index, theme, enableAddButton}: SelectsProps) => {
    const element = editorStore.getElementData(index) as BaseSelectListEditorElementDataStore

    return (
        <>
            <FormGroup>
                {element.values.map((value, element_index) => (
                    <FormControlLabel
                        disableTypography
                        control={
                            <Checkbox
                                checked={element.default_value.includes(element_index)}
                                onChange={(e) => handleDefaultCheckboxValueChange(e, index, element_index)}
                            />
                        }
                        label={
                            <Input
                                disableUnderline
                                fullWidth
                                sx={{ fontSize: theme.typography.body1.fontSize}}
                                value={element.values[element_index]}
                                onChange={(e) => handleEditOptionChange(e as React.ChangeEvent<HTMLInputElement>, index, element_index)}
                            />
                        }
                    />
                ))}
            </FormGroup>
            {enableAddButton &&
                <Button onClick={(e) => handleAddOptionClick(e, index)}>
                    <AddCircleIcon/> Add option
                </Button>
            }
        </>
    )
})

export const RadioValuesForm = observer(({index, theme, enableAddButton}: SelectsProps) => {
    const element = editorStore.getElementData(index) as BaseSelectListEditorElementDataStore

    return (
        <>
            <RadioGroup
                name="default_value"
                value={element.default_value}
                onChange={(e, value) => handleDefaultRadioValueChange(e, value, index)}
            >
                {element.values.map((value, element_index) => (
                    <FormControlLabel
                        key={element_index}
                        value={element_index}
                        control={<Radio/>}
                        disableTypography
                        label={
                            <Input
                                disableUnderline
                                fullWidth
                                sx={{fontSize: theme.typography.body1.fontSize}}
                                value={element.values[element_index]}
                                onChange={(e) => handleEditOptionChange(e as React.ChangeEvent<HTMLInputElement>, index, element_index)}
                            />
                        }
                    />
                ))}
            </RadioGroup>
            {enableAddButton &&
                <Button onClick={(e) => handleAddOptionClick(e, index)}>
                    <AddCircleIcon/> Add option
                </Button>
            }
        </>
    )
})