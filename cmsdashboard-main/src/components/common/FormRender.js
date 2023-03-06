import React, { useState } from "react";
import { TextField } from "@mui/material";
import Box from '@mui/material/Box';


function FormRender ({ formData, onSubmit }){
  // State to store the form data
  const [values, setValues] = useState({});

  // Helper function to update the form data
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    formData.find(x=>x.name === event.target.name? x.value= event.target.value:'')
  };

  // Helper function to submit the form
  const handleSubmit = (event) => {
    event.preventDefault();
    formData.find(x=>x.value === ''? x.error = true:x.error = false);
    for(let i=0;i<=formData.length-1;i++){
      if(formData[i].value == ''){
        formData[i].error = true;
        alert(formData[i].errorMessage);
      }else{
        if(formData[i].name === 'email'){
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData[i].value)) {
            formData[i].errorMessage= 'Invalid email address';
            formData[i].error = true;
            alert(formData[i].errorMessage);
          }else{
            formData[i].error = false;
          }
        }
        
      }
    }
    if( formData.find(x=>x.error === true)){
      console.log(formData)

    }else{
      onSubmit(values)
    }
    // formData.find(x=>x.error === true? '':);

    
  };

  return (
   
    <form onSubmit={handleSubmit}>
      {formData.map((field, index) => (
        <div key={index}>
          <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
          <TextField
          required
            type={field.type}
            label={field.label}
            name={field.name}
            value={values[field.name] || ''}
            onChange={handleChange}
          />
        </Box>
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
    
    // <form onSubmit={handleSubmit}>
    //   {formData.map((field, index) => (
    //     <div key={index}>

    //       <label htmlFor={field.name}>{field.label}:</label>
    //       <input
    //         type={field.type}
    //         name={field.name}
    //         value={values[field.name] || ""}
    //         onChange={handleChange}
    //       />
    //     </div>
    //   ))}
    //   <button type="submit">Submit</button>
    // </form>
   

  );
};

export default FormRender;