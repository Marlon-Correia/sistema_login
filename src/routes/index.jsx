import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import  RequireAuth  from '../RequireAuth';

const RoutesApp = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={
                    <RequireAuth>
                        <Home />
                    </RequireAuth>
                }/> 
                <Route path='/' element={<SignIn />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='*' element={<SignIn />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;