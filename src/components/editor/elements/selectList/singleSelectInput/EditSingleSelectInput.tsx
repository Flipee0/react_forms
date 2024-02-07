import React, {FC} from 'react';
import {IBaseEditorElementProps} from "../../../../../interfaces/editor/data/base";
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import WorkAreaInputBase from "../../WorkAreaInputBase";
import {editorStore} from "../../../../../store/editorStore";
import {
    ISingleSelectEditorElementData
} from "../../../../../interfaces/editor/data/selectLists";

const EditSingleSelectInput: FC<IBaseEditorElementProps> = ({index, theme}) => {
    const element = editorStore.getElementData(index) as ISingleSelectEditorElementData

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

export default EditSingleSelectInput;