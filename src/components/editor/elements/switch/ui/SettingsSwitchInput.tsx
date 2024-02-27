import React, {FC} from 'react';
import {IBaseEditorElementProps} from "../../elementProps";
import {Box, Switch} from "@mui/material";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import SettingsInputBase from "../../SettingsInputBase";
import {SwitchEditorElementDataStore} from "../model/store";
import {handleDefaultValueToggle, handleSwitchLabelChange} from "../utils/handlers";
import editorStore from "../../../model/editorStore";

const SettingsSwitchInput: FC<IBaseEditorElementProps> = ({index}) => {
    const element = editorStore.getElementData(index) as SwitchEditorElementDataStore

    return (
        <>
            <SettingsInputBase index={index}/>
            <TextField
                label="Switch label"
                variant="standard"
                fullWidth
                value={element.switch_label}
                onChange={(e) => handleSwitchLabelChange(e as React.ChangeEvent<HTMLInputElement>, index)}
            />
            <Box sx={{display: "flex", alignItems: "center"}}>
                <Switch
                    checked={element.default_value}
                    onChange={(e) => handleDefaultValueToggle(e, index)}/>
                <Typography variant={"body1"}>Default value</Typography>
            </Box>
        </>
    );
};

export default SettingsSwitchInput