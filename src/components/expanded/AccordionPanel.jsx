import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GeneralInfo from "./GeneralInfo";
import ExifData from "./ExifData";

const AccordionPanel = () => {
  return (
    <div>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>General Info</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <GeneralInfo />
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Exif Data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ExifData />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionPanel;
