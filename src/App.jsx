import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';
import 'react-loading-skeleton/dist/skeleton.css';
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
import ArtisteProfile from "./components/pages/main/ArtisteProfile";
import ShoutOut from "./components/pages/main/ShoutOut";
import MyProfile from "./components/pages/main/MyProfile";
import ChangePassword from "./components/pages/main/ChangePassword";
import Payment from "./components/pages/main/Payment";
import EditProfile from "./components/pages/main/EditProfile";
import AddBank from "./components/pages/main/AddBank";
import BookSession from "./components/pages/main/BookSession";
import BookForMe from "./components/pages/main/BookForMe";
import BookForFriend from "./components/pages/main/BookForFriend";
import BookPayment from "./components/pages/main/BookPayment";
import PaymentSuccess from "./components/PaymentSuccess";


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


        {/* For Authenticated Screens */}
        <Route element={<RedirectToLogin />} >
          <Route exact path="/" />
        </Route>
        {/* PROTECTED ROUTES */}
        <Route element={<RedirectToLogin />} >

          <Route exact path="/home" element={<Home />} />
          <Route exact path="/artiste" element={<ArtisteProfile />} />
          <Route exact path="/videos" element={<ShoutOut />} />
          <Route exact path="/profile" element={<MyProfile />} />
          <Route exact path="/profile/edit" element={<EditProfile />} />
          <Route exact path="/change-password" element={<ChangePassword />} />
          <Route exact path="/payment" element={<Payment />} />
          <Route exact path="/add-bank" element={<AddBank />} />
          <Route exact path="/booking" element={<BookSession />} />
          <Route exact path="/booking/for-me" element={<BookForMe />} />
          <Route exact path="/booking/for-friend" element={<BookForFriend />} />
          <Route exact path="/booking/payment" element={<BookPayment />} />

          <Route exact path="/notification" element={<Notification />} />
          <Route exact path="/reviews" element={<Reviews />} />
          <Route exact path="/discover" element={<Discover />} />


          {/* Payment Successful */}

          <Route exact path="/payment-success" element={<PaymentSuccess />} />


        </Route>

      </Routes>


    </Router>

  );
}

export default App;
