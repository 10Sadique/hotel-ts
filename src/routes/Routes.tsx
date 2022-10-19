import { createBrowserRouter } from 'react-router-dom';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import Main from '../layout/Main';
import Account from '../pages/Account';
import Home from '../pages/Home';
import PrivateRoute from '../pages/PrivateRoute';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/home',
                element: <Home />,
            },
            { path: '/signin', element: <SignIn /> },
            { path: '/signup', element: <SignUp /> },
            {
                path: '/account',
                element: (
                    <PrivateRoute>
                        <Account />
                    </PrivateRoute>
                ),
            },
        ],
    },
]);
