import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const RedirectToLogin = () => {
    var authUser = localStorage.user;

    if (authUser === undefined) {
        return <Navigate replace to="/login" />;
    }

    return window.location.pathname === "/" ? <Navigate replace to="/home" /> : <Outlet />;
}