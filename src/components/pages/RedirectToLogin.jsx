import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';


export const RedirectToLogin = () => {

    return window.location.pathname === "/" ? <Navigate replace to="/home" /> : <Outlet />;
}
