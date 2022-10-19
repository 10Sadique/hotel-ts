import { useState, useEffect, useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { MobileNav } from '@material-tailwind/react';

import { FaBars, FaTimes } from 'react-icons/fa';
import { AuthContext, AuthContextInterface } from '../contexts/UserContext';

export default function Header() {
    const [openNav, setOpenNav] = useState(false);

    const { logOut, user } = useContext(AuthContext) as AuthContextInterface;

    const handleSignOut = () => {
        logOut()
            .then(() => {
                console.log('Logged Out');
            })
            .catch((err) => {
                console.error(err);
            });
    };

    useEffect(() => {
        window.addEventListener(
            'resize',
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const active = ({ isActive }: { isActive: any }): string =>
        isActive ? 'text-purple-700' : 'text-black';

    const navList = (
        <div className="mb-4 mt-2 flex flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center h-full gap-6 font-semibold">
            <NavLink to={`/home`} className={active}>
                Home
            </NavLink>

            {user?.uid ? (
                <div className="lg:space-x-5">
                    <NavLink className={active} to={`/account`}>
                        Account
                    </NavLink>
                    <button
                        onClick={handleSignOut}
                        className="normal-case lg:w-auto w-full bg-purple-600 text-white py-2 px-5 rounded-md shadow-md shadow-deep-purple-600/50 mt-5 lg:mt-0"
                    >
                        Sign Out
                    </button>
                </div>
            ) : (
                <div className="lg:space-x-">
                    <NavLink className={active} to={`/signin`}>
                        Sign In
                    </NavLink>
                    <NavLink to={`/signup`}>
                        <button
                            className="normal-case lg:w-auto w-full bg-purple-600 text-white py-2 px-5 rounded-md shadow-md shadow-deep-purple-600/50 mt-5 lg:mt-0
                        "
                        >
                            Sign Up
                        </button>
                    </NavLink>
                </div>
            )}
        </div>
    );

    return (
        <nav className="bg-gray-300 border-0 lg:max-w-full rounded-none shadow-lg py-5 px-6 lg:px-8 lg:py-4">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <Link
                    to={`/`}
                    className="text-purple-700  cursor-pointer text-xl font-black"
                >
                    Hotel TS
                </Link>
                <div className="hidden lg:block">{navList}</div>
                <div
                    className=" h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden cursor-pointer"
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <FaTimes className="h-6 w-6" />
                    ) : (
                        <FaBars className="h-6 w-6" />
                    )}
                </div>
            </div>
            <MobileNav open={openNav}>{navList}</MobileNav>
        </nav>
    );
}
