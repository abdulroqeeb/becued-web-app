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
import { RedirectToLogin } from "./components/pages/RedirectToLogin";
import Notification from "./components/pages/main/Notification";
import Reviews from "./components/pages/main/Reviews";
import Discover from "./components/pages/main/Discover";
import AddInterest from "./components/pages/auth/AddInterest";
import ForgotPassword from "./components/pages/auth/ForgotPassword";
import ResetPassword from "./components/pages/auth/ResetPassword";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/verify-account" element={<VerifyAccount />} />
        <Route exact path="/set-password" element={<SetPassword />} />
        <Route exact path="/forgot-password" element={<ForgotPassword />} />
        <Route exact path="/reset-password" element={<ResetPassword />} />
        <Route exact path="/add-birthday" element={<AddBirthday />} />
        <Route exact path="/add-interest" element={<AddInterest />} />
        <Route exact path="/account-created" element={<AccountCreated />} />
        <Route exact path="/notification" element={<Notification />} />
        <Route exact path="/reviews" element={<Reviews />} />
        <Route exact path="/discover" element={<Discover />} />


        {/* For Authenticated Screens */}
        <Route element={<RedirectToLogin />} >
          <Route exact path="/home" element={<Home />} />
        </Route>

      </Routes>


    </Router>

  );
}

export default App;
