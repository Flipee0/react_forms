import React, {FC, ReactNode} from 'react';
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import List from "@mui/material/List";
import Accordion from "@mui/material/Accordion";

interface IControlGroup {
    children: ReactNode[] | ReactNode
    label: string;
}

const Group: FC<IControlGroup> = ({children, label}) => {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>{label}</Typography>
            </AccordionSummary>
            <AccordionDetails style={{padding: 0}}>
                <List style={{padding: 0}}>
                    {children}
                </List>
            </AccordionDetails>
        </Accordion>
    );
};

export default Group;