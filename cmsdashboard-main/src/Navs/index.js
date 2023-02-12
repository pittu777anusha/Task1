import React from 'react'
import {BrowserRouter,Routes,Route,Navigate,Outlet} from "react-router-dom";
import DashBoard from '../components/DashBoard';
import LandingPage from '../components/LandingPage';
import Students from '../components/Students';
import Courses from '../components/Courses';
import Subject from '../components/Subject';
import CourseDetails from '../components/CourseDetails';
import FaQ from '../components/FaQ';
function Navs() {
    const ProtectedRoute=()=>{
        if(true){
            return <Outlet/>
        }
        else{
            return <Navigate to='/'/>
        }
    }
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' exact element={<LandingPage/>}/>
        <Route element={<ProtectedRoute/>}>
            <Route path='/dashboard' element={<DashBoard/>}/>
            <Route path='/STUDENTS' element={<Students/>}/>

            <Route path='/FAQ' element={<FaQ/>}/>
            

        <Route path='/COURSE' element={<Courses/>}/>
        <Route path='/COURSE/:id' element={<CourseDetails/>}/>

        <Route path='/SUBJECT' element={<Subject/>}/>

        </Route>
        
    </Routes>
    </BrowserRouter>
  )
}

export default  Navs;