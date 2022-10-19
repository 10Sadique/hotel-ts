import React, { useContext } from 'react';
import { AuthContext, AuthContextInterface } from '../contexts/UserContext';

const Account = () => {
    const { user } = useContext(AuthContext) as AuthContextInterface;

    return (
        <div className="flex items-center justify-center">
            <div
                className="bg-gray-300 px-6 py-7 rounded-lg shadow-md mt-20 space-y-5
            "
            >
                <h1 className="text-center font-bold text-2xl text-gray-800">
                    Welcome {user?.displayName?.split(' ').at(-1)}
                </h1>
                <div className="flex items-center justify-center">
                    {user?.photoURL && (
                        <img
                            className="rounded-full"
                            src={user?.photoURL}
                            alt=""
                        />
                    )}
                </div>
                <div className="space-y-2">
                    <h1>Name: {user?.displayName}</h1>
                    <p>Email: {user?.email}</p>
                    <p>
                        Verified:{' '}
                        {user?.emailVerified ? (
                            <span className="bg-green-300 text-white py-1 px-2 text-xs rounded ">
                                Verified
                            </span>
                        ) : (
                            <span className="bg-red-300 text-white py-1 px-2 text-xs rounded ">
                                Not verified
                            </span>
                        )}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Account;
