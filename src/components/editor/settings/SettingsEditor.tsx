import React, {FC} from 'react';
import {useTheme} from "@mui/material";
import Stack from "@mui/material/Stack";
import {Observer} from "mobx-react-lite";
import {ElementStore} from "../../../store/editorStore";

interface ISettingsEditorProps {
    selected: number,
    value: ElementStore
}

const SettingsEditor: FC<ISettingsEditorProps> = ({selected, value}) => {
    const theme = useTheme()
    return (
        <Stack spacing={2}>
            <Observer>
                {() => value.editor_config.settings_view_component({index: selected, theme: theme})}
            </Observer>
        </Stack>
    );
};

export default SettingsEditor;