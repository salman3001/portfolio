import React from "react";
import { Route, Routes } from "react-router-dom";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Layout from "./Layout";
import { Home } from "./Home";
import ProjectsPage from "./ProjectsPage";

const App = () => {
  return (
    <>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Route>
    </Routes>
    <div className="text-black">
    <FloatingWhatsApp phoneNumber="971529551244" accountName="Salman"  avatar={import.meta.env.VITE_BASE_URL + "/images/profile-pic-sm.jpg"} statusMessage="Typiclly replies within 15 minutes"/>
    </div>
    </>
  );
};

export default App;
