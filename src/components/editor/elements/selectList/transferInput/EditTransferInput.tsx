import React, {FC} from 'react';
import {IBaseEditorElementProps} from "../../../../../interfaces/editor/data/base";
import {Button, Card, CardHeader, Divider, Grid, Input, Stack} from "@mui/material";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Typography from "@mui/material/Typography";
import WorkAreaInputBase from "../../WorkAreaInputBase";
import {editorStore} from "../../../../../store/editorStore";
import {
    handleChoicesLabelChange,
    handleChoicesSelectedNumberLabelChange,
    handleChosenLabelChange,
    handleChosenSelectedNumberLabelChange
} from "./handlers";
import {TransferEditorElementDataStore} from "./store";

const elementsList = (
    title: React.ReactNode,
    items: readonly {label: string, index: number}[],
    total_length: number,
    selected_number_label: React.ReactNode | null,
    handler: (index: number) => void
) => (
    <Card sx={{height: "100%"}}>
        <CardHeader
            sx={{ px: 2, py: 1 }}
            title={title}
            subheader={selected_number_label == null ? "" :
                <Stack direction={"row"} spacing={0.5} alignItems={"center"}>
                    <Typography variant={"subtitle1"}>
                        {`${items.length}/${total_length}`}
                    </Typography>
                    {selected_number_label}
                </Stack>
            }
        />
        <Divider />
        <List
            dense
            component="div"
            role="list"
            sx={{bgcolor: 'background.paper', height: "100%"}}
        >
            {items.map(({label, index}) => (
                <ListItemButton key={index} onDoubleClick={() => handler(index)}>
                    <ListItemText primary={label}/>
                </ListItemButton>
            ))}
        </List>
    </Card>
)

const EditTransferInput: FC<IBaseEditorElementProps> = ({index, theme}) => {
    const element = editorStore.getElementData(index) as TransferEditorElementDataStore
    const total_length = element.values.length

    const right = element.default_value as number[]
    const left = Array.from(Array(total_length).keys())
        .filter((value) => !right.includes(value));

    const moveAllRightHandler = () => {
        element.default_value = [...right, ...left]
    }

    const moveAllLeftHandler = () => {
        element.default_value = []
    }

    const moveItemRightHandler = (item_index: number) => {
        element.default_value = [...right, item_index]
    }

    const moveItemLeftHandler = (item_index: number) => {
        element.default_value = right.filter(value => value !== item_index)
    }

    return (
        <>
            <WorkAreaInputBase index={index} theme={theme}/>
            <Grid container spacing={2} justifyContent="center" flexWrap={"nowrap"}>
                <Grid item width={"100%"}>
                    {elementsList(
                        <Input
                            fullWidth
                            sx={{ fontSize: theme.typography.body1.fontSize}}
                            disableUnderline
                            value={element.choices_label}
                            onChange={(e) => handleChoicesLabelChange(e as React.ChangeEvent<HTMLInputElement>, index)}
                        />,
                        left.map(value => {
                            return {label: element.values[value], index: value}
                        }),
                        total_length,
                        <Input
                            fullWidth
                            sx={{ fontSize: theme.typography.body1.fontSize, color: theme.palette.text.secondary}}
                            disableUnderline
                            value={element.choices_selected_number_label}
                            onChange={(e) => handleChoicesSelectedNumberLabelChange(e as React.ChangeEvent<HTMLInputElement>, index)}
                        />,
                        moveItemRightHandler
                    )}
                </Grid>
                {element.enable_move_all &&
                    <Grid item alignSelf={"center"}>
                        <Grid container direction="column" alignItems="center">
                            <Button
                                sx={{ my: 0.5 }}
                                variant="outlined"
                                size="small"
                                disabled={left.length === 0}
                                onClick={moveAllRightHandler}
                            >
                                ≫
                            </Button>
                            <Button
                                sx={{ my: 0.5 }}
                                variant="outlined"
                                size="small"
                                disabled={right.length === 0}
                                onClick={moveAllLeftHandler}
                            >
                                ≪
                            </Button>
                        </Grid>
                    </Grid>
                }
                <Grid item width={"100%"}>
                    {elementsList(
                        <Input
                            fullWidth
                            sx={{ fontSize: theme.typography.body1.fontSize}}
                            disableUnderline
                            value={element.chosen_label}
                            onChange={(e) => handleChosenLabelChange(e as React.ChangeEvent<HTMLInputElement>, index)}
                        />,
                        right.map(value => {
                            return {label: element.values[value], index: value}
                        }),
                        total_length,
                        <Input
                            fullWidth
                            sx={{ fontSize: theme.typography.body1.fontSize, color: theme.palette.text.secondary}}
                            disableUnderline
                            value={element.chosen_selected_number_label}
                            onChange={(e) => handleChosenSelectedNumberLabelChange(e as React.ChangeEvent<HTMLInputElement>, index)}
                        />,
                        moveItemLeftHandler
                    )}
                </Grid>
            </Grid>
        </>
    );
};

export default EditTransferInput;