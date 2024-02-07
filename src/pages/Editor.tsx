import {Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';
import Controls from "../components/editor/controls/Controls";
import WorkArea from "../components/editor/workarea/WorkArea";
import Settings from "../components/editor/settings/Settings";

const Editor = () => {
    return (
        <Container maxWidth={false} style={{padding: 0}}>
            <Grid container spacing={2} height="100%" marginTop={2}>
                <Grid item md={3}>
                    <Controls/>
                </Grid>
                <Grid item md={6}>
                    <WorkArea/>
                </Grid>
                <Grid item md={3}>
                    <Settings/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Editor;