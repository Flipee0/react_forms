import React, {FC} from 'react';
import {IBaseEditorElementProps} from "../../elementProps";
import {Box, Input, Switch} from "@mui/material";
import WorkAreaInputBase from "../../WorkAreaInputBase";
import {handleDefaultValueToggle, handleSwitchLabelChange} from "../utils/handlers";
import {SwitchEditorElementDataStore} from "../model/store";
import editorStore from "../../../model/editorStore";

const WorkAreaSwitchInput: FC<IBaseEditorElementProps> = ({index, theme}) => {
    const element = editorStore.getElementData(index) as SwitchEditorElementDataStore

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

export default WorkAreaSwitchInput