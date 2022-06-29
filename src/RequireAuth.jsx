import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from './hooks/useAuth';

const RequireAuth = ({children}) => {
    const {signed} = useAuth();
    if(signed !== true) return <Navigate to='/' />
    return children
}
export default RequireAuth