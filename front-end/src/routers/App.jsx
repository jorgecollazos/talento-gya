import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import RecoveryPassword from "../pages/RecoveryPassword";
import SendEmailPassword from "../pages/SendEmailPassword";
import Disclaimer from "../pages/Disclaimer";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Profile from "../pages/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/disclaimer" element={<Disclaimer />} />
          <Route exact path="/recovery-password" element={<RecoveryPassword />} />
          <Route exact path="/send-email-password" element={<SendEmailPassword />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
