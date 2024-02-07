import React, {FC} from 'react';
import {IEditorElementData} from "../../../interfaces/editor/data/base";
import {all_editor_elements} from "../../../consts/editorElements";
import {useTheme} from "@mui/material";
import Stack from "@mui/material/Stack";
import {Observer} from "mobx-react-lite";

interface ISettingsEditorProps {
    selected: number,
    value: IEditorElementData
}

const SettingsEditor: FC<ISettingsEditorProps> = ({selected, value}) => {
    const theme = useTheme()
    return (
        <Stack spacing={2}>
            <Observer>
                {() => all_editor_elements.find(
                    (editor_element) => editor_element.type === value.type
                )!.settings_view_component({index: selected, theme: theme})}
            </Observer>
        </Stack>
    );
};

export default SettingsEditor;