import React,{lazy,useState,useEffect,Suspense} from 'react'
import FormRender from '../common/FormRender';
import CommonTable from '../common/CommonTable';
// import CourseTable from '../common/CourseTable';
import DashBoard from '../DashBoard';
// import Header from '../common/Header';
const CourseTable = lazy(() => import('../common/CourseTable'));
const Header = lazy(() => import('../common/Header'));

function Courses() {
    const [formData, setFormData] = useState([
        {
          label: "Course_id",
          type: "text",
          name: "course_id",
          value: "",
          error:false,
          errorMessage: "please enter courseId"
        },
        {
          label: "Course Name",
          type: "text",
          name: "course_name",
          value: "",
          error:false,
          errorMessage: "please enter courseName"
        },
        {
          label: "Instructor",
          type: "text",
          name: "instructor",
          value: "",
          error:false,
          errorMessage: "please enter Instructor"
        },
        {
          label: "Enrolled Courses",
          type: "text",
          name: "enrolledCourses",
          value: "",
          error:false,
          errorMessage: "please enter Enrolled Courses"
        },
        
      ]);
    
      
      const [selectedRow, setSelectedRow] = useState(null);
    
      
      useEffect(() => {
        const data = JSON.parse(localStorage.getItem("courses")) || [];
        setCourseData(data);
      }, []);
    
      
      const [courseData, setCourseData] = useState([]);
    
      
      const saveData = (data) => {
        localStorage.setItem("courses", JSON.stringify(data));
        setCourseData(data);
      };
    
      
      const addSubject = (subject) => {
        
        const data = [...courseData, subject];
        saveData(data);
      };
    
      
      const updateSubject = (subject) => {
      
        const data = [...courseData];
        data[selectedRow] = subject;
        saveData(data);
        setSelectedRow(null);
      };
    
     
      const deleteSubject = (index) => {
        const data = [...courseData];
        data.splice(index, 1);
        saveData(data);
      };
    
      return (
        <div>
          <Suspense fallback={<div>Loading...</div>}>
          <Header/>
          </Suspense>
            
          {selectedRow === null ? (
            <FormRender
              formData={formData}
              onSubmit={(subject) => addSubject(subject)}
            />
          ) : (
            <FormRender
              formData={formData}
              onSubmit={(subject) => updateSubject(subject)}
            />
          )}
          <Suspense fallback={<div>Loading...</div>}>
          <CourseTable
            courseData={courseData}
            onEdit={(index) => setSelectedRow(index)}
            onDelete={(index) => deleteSubject(index)}
          />
          </Suspense>
        </div>
      )
}

export default Courses
