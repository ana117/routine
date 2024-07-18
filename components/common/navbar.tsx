"use client"

import { FC } from "react"
import ThemeToggler from "./theme-toggler";
import Link from "next/link";

const NavBar: FC = () => {
    return (
        <nav className="p-4 w-full flex justify-between sticky top-0">
            <Link href={"/"} className="text-2xl font-bold">
                Routine
            </Link>
            <ThemeToggler />
        </nav>
    );
};

NavBar.displayName = "NavBar";
export default NavBar;
    