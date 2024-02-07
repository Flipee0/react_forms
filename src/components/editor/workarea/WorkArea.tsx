import React from 'react';
import WorkAreaElement from "./WorkAreaElement";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import {Box, Button, Stack } from '@mui/material';
import {DragDropContext, Droppable, DropResult} from 'react-beautiful-dnd';
import {editorStore} from "../../../store/editorStore";
import {observer} from "mobx-react-lite";

const WorkArea = observer(() => {
    const onDragStart = () => {
        editorStore.selected = null
    }

    const onDragEnd = ({ destination, source }: DropResult) => {
        if (!destination) return;

        const newItems = [...editorStore.elements];
        const [removed] = newItems.splice(source.index, 1);
        newItems.splice(destination.index, 0, removed);

        editorStore.elements = newItems
    };

    return (
        <Stack spacing={2}>
            <Typography variant={"h5"} textAlign={"center"}>Editor</Typography>
            <Divider/>
            <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
                <Droppable droppableId="droppable-list">
                    {provided => (
                        <Box ref={provided.innerRef} {...provided.droppableProps}>
                            {editorStore.elements.map((value, index) => (
                                <Box key={index} sx={{marginBottom: 3}}>
                                    <WorkAreaElement
                                        index={index}
                                        editorConfig={value.editor_config}
                                    />
                                </Box>
                            ))}
                            {provided.placeholder}
                        </Box>
                    )}
                </Droppable>
            </DragDropContext>
            {editorStore.elements.length !== 0 &&
                <Stack direction={"row"} spacing={1} sx={{paddingBottom: 2}}>
                    <Button variant="outlined">Publish</Button>
                    <Button variant="outlined">Save draft</Button>
                    <Button variant="outlined">Preview</Button>
                </Stack>
            }
            {editorStore.elements.length === 0 &&
                <Typography variant={"body1"}>Choose element from tools and double-click it</Typography>
            }
        </Stack>
    );
});

export default WorkArea;