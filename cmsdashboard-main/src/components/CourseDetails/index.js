import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Header from '../common/Header';
import { styled } from '@mui/material/styles';


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

function CourseDetails() {
    const[currentData,setCurrentData]=useState([]);
    const param=useParams();
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("courses"));
        console.log(data)
        // console.log(id)
        console.log(param.id)

        setCurrentData(data);
      }, []);
      const filtered = currentData.filter(employee => 
       param.id == employee.course_id
      );
      console.log(filtered)
      
  return (
    <div>
     <Header/>
   
      <TableContainer>
    <Table sx={{ minWidth:700 }} aria-label="customized table">
    <TableHead>
    <TableRow>
    <StyledTableCell >Course Id</StyledTableCell>
    <StyledTableCell align="right">Course Name</StyledTableCell>
    <StyledTableCell align="right">Instructor</StyledTableCell>
    <StyledTableCell align="right">Enrolled Courses</StyledTableCell>
    
        </TableRow>
      </TableHead>
      <TableBody>
     

        {
          filtered.map((row,index) => (
            
            
              <StyledTableRow >
                <StyledTableCell component="th" scope="row">{row.course_id}</StyledTableCell >
              <StyledTableCell align="right">{row.course_name} </StyledTableCell >
              <StyledTableCell align="right">{row.instructor} </StyledTableCell >
              <StyledTableCell align="right">{row.enrolledCourses} </StyledTableCell >
          
                </StyledTableRow>
          ))
            
        } 
        
      

     
      

     
    </TableBody>
    </Table>
  </TableContainer>

    </div>
  )
}

export default CourseDetails
