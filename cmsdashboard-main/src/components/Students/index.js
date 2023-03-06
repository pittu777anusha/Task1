import React, { lazy,useState, useEffect,Suspense } from "react";
const FormRender = lazy(() => import('../common/FormRender'));
const StudentTable = lazy(() => import('../common/StudentTable'));
const Header = lazy(() => import('../common/Header'));


function Students() {
  // State to store the form data
  
  const [formData, setFormData] = useState([
    {
        label: "Student_id",
        type: "text",
        name: "student_id",
        value: "",
        error: false,
        errorMessage: "please enter student id"
      },
      {
        label: "First Name",
        type: "text",
        name: "firstName",
        value: "",
        error: false,
        errorMessage: "please enter fname"
      },
      {
        label: "Email",
        type: "email",
        name: "email",
        value: "",
        error: false,
        errorMessage: "please enter mailid",
        IsValidEmail: false,
      },
      {
        label: "Enrolled Courses",
        type: "select",
        name: "enrolledCourse",
        value: "",
        error: false,
        errorMessage: "please enter enrolled course"
      },
  ]);

  
  const [selectedRow, setSelectedRow] = useState(null);

  
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("students")) || [];
    setStudentData(data);
  }, []);

  
  const [studentData, setStudentData] = useState([]);

  
  const saveData = (data) => {
    localStorage.setItem("students", JSON.stringify(data));
    setStudentData(data);
  };

  
  const addSubject = (subject) => {
    // Validation can be added here
    const data = [...studentData, subject];
    saveData(data);
  };

  
  const updateSubject = (subject) => {
    // Validation can be added here
    const data = [...studentData];
    data[selectedRow] = subject;
    saveData(data);
    setSelectedRow(null);
  };

 
  const deleteSubject = (index) => {
    const data = [...studentData];
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
        // <Suspense fallback={<div>Loading...</div>}>
 <FormRender
          formData={formData}
          onSubmit={(subject) => updateSubject(subject)}
        />
        // </Suspense>
       
      )}
      <Suspense fallback={<div>Loading...</div>}>
      <StudentTable
        studentData={studentData}
        onEdit={(index) => setSelectedRow(index)}
        onDelete={(index) => deleteSubject(index)}
      />
      </Suspense>
      
    </div>
  );
};

export default Students;
