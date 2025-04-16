import React from "react";
import Layout from "./pages/layout";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Landingpage from "./pages/LandingPage/Landingpage";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
