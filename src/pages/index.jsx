import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
import CreateCourse from "./courses/create";
import CoursesList from "./courses/list";
import Layout from "./layout";
import CreateStudent from "./students/create";
import StudentsList from "./students/list";
import CreateTeacher from "./teachers/create";
import TeachersList from "./teachers/list";

const Pages = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<CoursesList />} />

        <Route path="/courses" element={<CoursesList />} />
        <Route path="/courses/create" element={<CreateCourse />} />

        <Route path="/students" element={<StudentsList />} />
        <Route path="/students/create" element={<CreateStudent />} />

        <Route path="/teachers" element={<TeachersList />} />
        <Route path="/teachers/create" element={<CreateTeacher />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default Pages;
