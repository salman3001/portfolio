import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { Home } from "./Home";
import ProjectsPage from "./ProjectsPage";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Route>
    </Routes>
  );
};

export default App;
