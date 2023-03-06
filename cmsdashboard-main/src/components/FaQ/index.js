import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from '../common/Header';
import { Button, TextField } from '@mui/material';

export default function FaQ() {
  const [faqData,setFaqData]=React.useState("");
  const [list,setList]=React.useState([]);
  const [ans,setAns]=React.useState("");
  const [list1,setList1]=React.useState([]);
  const [submitAns,setSubmitAns]=React.useState(false);

 
                                                                 
  // const handleChange = (e) => {
  //  setFaqData(e.target.value);
   

    
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const date={faqData};
    setList((ls)=>[...ls,date]);
    setFaqData('');


   
   
    // ... submit to API or something
  };
  const handleSubmit1=(e)=>{
    e.preventDefault()
  }


  return (
    <div>
    <Header 

    />

     {/* <form >
    <TextField 
    type="text"
    label="Ask your question"
    onChange={handleChange}
    value={faqData}
    />
    <Button onSubmit={handleSubmit}>Submit</Button>
  </form > */}
 <form onSubmit={handleSubmit}>
  <input name="Ask your Question" placeholder='Ask your Question' value={faqData} onChange={(e)=>setFaqData(e.target.value)}/>
  <Button type="submit">Submit</Button>
 </form>

     
 
 <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>  How do I perform Create (C) operation in local storage with React?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You can use the localStorage.setItem() method to store data in local storage. For example:
          localStorage.setItem('key', JSON.stringify(value))

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
      {
      list.map((a,i)=>{
        return(
      <Accordion
      
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
      
          <Typography>
            {a.faqData}?
           </Typography>
            
        
          
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography >
            
          <TextField/>
               
          </Typography>
        </AccordionDetails>
      </Accordion> 
        )})
        }

     
    </div>
  );
}
