import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from '../common/Header';

export default function FaQ() {
  return (
    <div>
    <Header />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography> How do I perform Create (C) operation in local storage with React?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You can use the localStorage.setItem() method to store data in local storage. For example:
          localStorage.setItem('key', JSON.stringify(value));

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography> How do I perform Read (R) operation in local storage with React?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You can use the localStorage.getItem() method to retrieve data from local storage. For example:
          const data = JSON.parse(localStorage.getItem('key'));

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How do I perform Update (U) operation in local storage with React?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You can perform the update operation by first retrieving the data from local storage, modifying it, and then storing it back to local storage. For example:const data = JSON.parse(localStorage.getItem('key')); data.property = 'new value'; localStorage.setItem('key', JSON.stringify(data));

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How do I perform Delete (D) operation in local storage with React?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You can use the localStorage.removeItem() method to delete an item from local storage. For example:localStorage.removeItem('key');

          </Typography>
        </AccordionDetails>
      </Accordion>

     
    </div>
  );
}
