import React, {FC} from 'react';
import {IBaseEditorElementProps} from "../../../../elementProps";
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import WorkAreaInputBase from "../../../../WorkAreaInputBase";
import {SingleSelectEditorElementDataStore} from "../model/store";
import editorStore from "../../../../../model/editorStore";

const WorkAreaSingleSelectInput: FC<IBaseEditorElementProps> = ({index, theme}) => {
    const element = editorStore.getElementData(index) as SingleSelectEditorElementDataStore

    const handleSelectChange = (e: SelectChangeEvent<number>) => {
        element.default_value = e.target.value as number
    }

    return (
        <>
            <WorkAreaInputBase index={index} theme={theme}/>
            <FormControl fullWidth sx={{marginTop: 1}}>
                <InputLabel>{element.select_label}</InputLabel>
                <Select
                    label={element.select_label}
                    value={element.default_value}
                    onChange={handleSelectChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {(element.values.map((value, element_index) =>
                        <MenuItem key={element_index} value={element_index}>{value}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </>
    );
};

export default WorkAreaSingleSelectInput