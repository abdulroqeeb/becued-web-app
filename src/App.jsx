import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';
import Home from "./components/pages/Home";
import Register from "./components/pages/auth/Register";
import Login from "./components/pages/auth/Login";
import VerifyAccount from "./components/pages/auth/VerifyAccount";
import SetPassword from "./components/pages/auth/SetPassword";
import AddBirthday from "./components/pages/auth/AddBirthday";
import AccountCreated from "./components/pages/auth/AccountCreated";



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/verify-account" element={<VerifyAccount />} />
        <Route exact path="/set-password" element={<SetPassword />} />
        <Route exact path="/add-birthday" element={<AddBirthday />} />
        <Route exact path="/account-created" element={<AccountCreated />} />
      </Routes>


      {/* For Authenticated Screens */}
      <Routes>
        <Route exact path="/home" element={<Home />} />
      </Routes>

    </Router>

  );
}

export default App;
