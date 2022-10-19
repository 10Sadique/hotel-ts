import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from '@material-tailwind/react';

import { HiBars3, HiXMark } from 'react-icons/hi2';

export default function Header() {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            'resize',
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const active = ({ isActive }: { isActive: any }): string =>
        isActive ? 'text-purple-700' : 'text-black';

    const navList = (
        <div className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 font-semibold">
            <NavLink to={`/home`} className={active}>
                Home
            </NavLink>
            <NavLink className={active} to={`/signin`}>
                Sign In
            </NavLink>
            <NavLink className={active} to={`/account`}>
                Account
            </NavLink>
        </div>
    );

    return (
        <Navbar className="lg:max-w-full rounded-none py-5 px-6 lg:px-8 lg:py-4">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <Typography className="mr-4 cursor-pointer text-xl font-black">
                    Hotel TS
                </Typography>
                <div className="hidden lg:block">{navList}</div>
                <Button
                    color="purple"
                    variant="gradient"
                    className="hidden normal-case lg:inline-block"
                >
                    Sign Up
                </Button>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <HiXMark className="h-6 w-6" />
                    ) : (
                        <HiBars3 className="h-6 w-6" />
                    )}
                </IconButton>
            </div>
            <MobileNav open={openNav}>
                {navList}
                <Button
                    variant="gradient"
                    color="purple"
                    fullWidth
                    className="mb-2"
                >
                    Sign Up
                </Button>
            </MobileNav>
        </Navbar>
    );
}
