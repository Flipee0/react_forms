import React from 'react';
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Stack from '@mui/material/Stack';
import SettingsEditor from "./SettingsEditor";
import {editorStore} from "../../../store/editorStore";
import {observer} from "mobx-react-lite";

const Settings = observer(() => {
    return (
        <Stack spacing={2} sx={{position: "sticky", top: 0}}>
            <Typography variant={"h5"} textAlign={"center"}>Settings</Typography>
            <Divider/>
            {editorStore.selected != null &&
                <SettingsEditor
                    value={editorStore.elements[editorStore.selected]}
                    selected={editorStore.selected}
                />
            }
            {editorStore.selected == null &&
                <Typography variant={"body1"}>Select field to view settings</Typography>
            }
        </Stack>
    );
});

export default Settings;