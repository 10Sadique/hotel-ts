import React, { FormEvent, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext, AuthContextInterface } from '../contexts/UserContext';

const SignIn = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const { signIn, googleSignIn } = useContext(
        AuthContext
    ) as AuthContextInterface;

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        const form = e.target as HTMLFormElement;

        const { email, password } = e.target as typeof e.target & {
            email: { value: string };
            password: { value: string };
        };

        // console.log(email.value, password.value);

        signIn(email.value, password.value)
            .then((result) => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div className="flex items-center justify-center">
            <form
                onSubmit={handleSubmit}
                className="bg-gray-300 text-gray-700 my-10 rounded-lg px-7 py-6 shadow-lg w-96"
            >
                <h1 className="font-bold text-center mb-5 text-3xl">Sign In</h1>
                <div className="space-y-4">
                    <div className="space-y-1 w-full">
                        <label className="block text-sm" htmlFor="name">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            className="rounded-md px-3 py-2 bg-gray-200 border-2 border-gray-400 w-full"
                            required
                        />
                    </div>
                    <div className="space-y-1 w-full">
                        <label className="block text-sm" htmlFor="name">
                            Password:
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            className="rounded-md px-3 py-2 bg-gray-200 border-2 border-gray-400 w-full"
                            required
                        />
                    </div>
                </div>
                <div className="mt-5 space-y-2">
                    <button
                        type="submit"
                        className="w-full py-2 bg-purple-600 text-white rounded-lg shadow-md shadow-purple-600/50"
                    >
                        Sign In
                    </button>
                    <p className="text-xs text-center">or</p>
                    <button
                        onClick={handleGoogleSignIn}
                        className="w-full py-2 bg-gray-400 text-gray-900 rounded-lg shadow-md shadow-gray-400/50 flex items-center justify-center gap-3"
                    >
                        <FaGoogle className="h-5 w-5" />
                        <span>Continue with Google</span>
                    </button>
                </div>
                <p className="text-center mt-7">
                    Don't have an Account?{' '}
                    <Link to={`/signup`} className="text-purple-600 underline">
                        Sign Up
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default SignIn;
