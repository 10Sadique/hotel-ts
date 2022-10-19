import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext, AuthContextInterface } from '../contexts/UserContext';

interface Children {
    children: React.ReactNode;
}

const PrivateRoute = ({ children }: Children): any => {
    const { user, loading } = useContext(AuthContext) as AuthContextInterface;
    const location = useLocation();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (user && user.uid) {
        return children;
    }

    return (
        <Navigate to={`/signin`} state={{ from: location }} replace={true} />
    );
};

export default PrivateRoute;
