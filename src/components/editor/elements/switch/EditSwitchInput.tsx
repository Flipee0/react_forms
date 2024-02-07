import React, {FC} from 'react';
import {IBaseEditorElementProps} from "../../../../interfaces/editor/data/base";
import {Box, Input, Switch} from "@mui/material";
import WorkAreaInputBase from "../WorkAreaInputBase";
import {handleDefaultValueToggle, handleSwitchLabelChange} from "./handlers";
import {editorStore} from "../../../../store/editorStore";
import {ISwitchEditorElementData} from "../../../../interfaces/editor/data/switch";

const EditSwitchInput: FC<IBaseEditorElementProps> = ({index, theme}) => {
    const element = editorStore.getElementData(index) as ISwitchEditorElementData

    return (
        <>
            <WorkAreaInputBase index={index} theme={theme}/>
            <Box sx={{display: "flex", alignItems: "center"}}>
                <Switch
                    checked={element.default_value}
                    onChange={(e) => handleDefaultValueToggle(e, index)}
                />
                <Input
                    fullWidth
                    sx={{ fontSize: theme.typography.body1.fontSize}}
                    disableUnderline
                    value={element.switch_label}
                    onChange={(e) => handleSwitchLabelChange(e as React.ChangeEvent<HTMLInputElement>, index)}
                />
            </Box>
        </>
    );
};

export default EditSwitchInput;