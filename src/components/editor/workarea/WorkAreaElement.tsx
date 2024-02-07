import React, {useState} from 'react';
import Typography from "@mui/material/Typography";
import {Button, Modal, useTheme} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import Box from "@mui/material/Box";
import CancelIcon from '@mui/icons-material/Cancel';
import {IEditorElement} from "../../../interfaces/editor";
import DehazeIcon from '@mui/icons-material/Dehaze';
import Divider from "@mui/material/Divider";
import {Draggable} from "react-beautiful-dnd";
import IconButton from "@mui/material/IconButton";
import {editorStore} from "../../../store/editorStore";
import {Observer, observer} from "mobx-react-lite";

type Props = {
    index: number
    editorElement: IEditorElement
}

const WorkAreaElement = observer(({index, editorElement}: Props) => {
    const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState(false)
    const theme = useTheme()

    const selectHandler = () => {
        editorStore.selected = index
    }

    const deleteConfirmationCloseHandler = () => {
        setIsDeleteConfirmationOpen(false)
    }

    const deleteConfirmationOpenHandler = () => {
        setIsDeleteConfirmationOpen(true)
    }

    const deleteConfirmedCloseHandler = () => {
        deleteConfirmationCloseHandler()
        editorStore.elements.splice(index, 1)
    }

    const modalStyle = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <Draggable draggableId={index.toString()} index={index}>
            {(provided) => (
                <div
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                >
                    <Box sx={{display: "flex"}}>
                        <Box sx={{width: "100%"}} onClick={selectHandler}>
                            {
                                <Observer>
                                    {() => editorElement.edit_component({index, theme})}
                                </Observer>
                            }
                        </Box>
                        <Divider sx={{color: theme.palette.text.primary, marginLeft: 2}} orientation={"vertical"} variant={"fullWidth"} flexItem/>
                        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <Box {...provided.dragHandleProps} sx={{paddingLeft: 2, paddingRight: 2, display: "flex", alignItems: "center"}}>
                                <DehazeIcon/>
                            </Box>
                            <Box>
                                <IconButton
                                    color={"error"}
                                    onClick={deleteConfirmationOpenHandler}
                                >
                                    <DeleteIcon/>
                                </IconButton>
                            </Box>
                        </Box>
                    </Box>
                    <Modal
                        open={isDeleteConfirmationOpen}
                        onClose={deleteConfirmationCloseHandler}
                        aria-labelledby="parent-modal-title"
                        aria-describedby="parent-modal-description"
                    >
                        <Box sx={ modalStyle }>
                            <Typography variant={"h5"} sx={{alignSelf: "center"}}>Confirm deletion</Typography>
                            <Typography variant={"body1"} sx={{alignSelf: "center"}}>Are you sure you want to delete this element?</Typography>
                            <div style={{ marginTop: "1em" }}>
                                <Button
                                    variant={"contained"}
                                    startIcon={<DeleteIcon/>}
                                    color={"error"}
                                    onClick={deleteConfirmedCloseHandler}
                                    sx = {{ marginRight : 1 }}
                                >
                                    Confirm
                                </Button>
                                <Button
                                    variant={"contained"}
                                    startIcon={<CancelIcon/>}
                                    color={"primary"}
                                    onClick={deleteConfirmationCloseHandler}
                                    sx = {{ marginRight : 1 }}
                                >
                                    Cancel
                                </Button>
                            </div>
                        </Box>
                    </Modal>
                </div>
            )}
        </Draggable>
    );
});

export default WorkAreaElement;