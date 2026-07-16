import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Classes from "../pages/Classes/Classes";
import AllSubjects from "../pages/Subjects/AllSubjects";
import Subjects from "../pages/Subjects/Subjects";
import Lessons from "../pages/Lessons/Lessons";
import PdfViewer from "../components/PDFViewer/PdfViewer";
import Literature from "../pages/Literature/Literature";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound/NotFound";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/subjects" element={<AllSubjects />} />
          <Route path="/subjects/:classId" element={<Subjects />} />
          <Route path="/lessons/:classId/:subjectId" element={<Lessons />} />
          <Route path="/viewer/:classId/:subjectId/:lessonId" element={<PdfViewer />} />
          <Route path="/viewer/:lessonId" element={<PdfViewer />} />
          <Route path="/literature" element={<Literature />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
