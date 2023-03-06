import React, { useState, useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import {Link} from 'react-router-dom'
import { width } from "@mui/system";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function CommonTable({tableData,setTableData,onDelete,onEdit,formData}){

  const saveData = (data) => {
    localStorage.setItem("tableData", JSON.stringify(data));
    setTableData(data);
  };

  // Function to add a new row to the table
  const addRow = (newRow) => {
    // Validation can be added here
    const data = [...tableData, newRow];
    saveData(data);
  };

  // Function to update a row in the table
  const updateRow = (index, updatedRow) => {
    // Validation can be added here
    const data = [...tableData];
    data[index] = updatedRow;
    saveData(data);
  };

  // Function to delete a row from the table
  const deleteRow = (index) => {
    const data = [...tableData];
    data.splice(index, 1);
    saveData(data);
  };


  return (
    <TableContainer>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
      <TableHead>
      <TableRow>
      
       
       
      <StyledTableCell >Subject</StyledTableCell>
       <StyledTableCell align="right" >Description</StyledTableCell>
      <StyledTableCell align="right"  >CourseId</StyledTableCell>
      <StyledTableCell align="right" >Duration</StyledTableCell>
      <StyledTableCell align="right" >Action</StyledTableCell>
      

          </TableRow>
        </TableHead>
        {/* // <tr key={index}> */}

        <TableBody>
        {tableData.map((row, index) => (
                     
         
          

            <StyledTableRow key={index} >
            
              <StyledTableCell component="th" scope="row">{row.subjectName}</StyledTableCell >
            <StyledTableCell align="right">{row.description} </StyledTableCell >
            <Link to={`/Course/${row.code}`} style={{
          
          cursor: "pointer",
          textDecoration: "none",
          color:'black'
        }}>  <StyledTableCell align="right">{row.code} </StyledTableCell ></Link>
            <StyledTableCell align="right">{row.duration} </StyledTableCell >
            <StyledTableCell align="right">
              <button onClick={() => onEdit(index, row)}>Edit</button>
              <button onClick={() => onDelete(index)}>Delete</button>
              </StyledTableCell>
              
              </StyledTableRow>
          // 
          /* </tr> */
        ))}
         
      </TableBody>
     
      </Table>
    </TableContainer>
  );
};

export default CommonTable;
