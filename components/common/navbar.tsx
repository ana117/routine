"use client"

import { FC } from "react"
import ThemeToggler from "./theme-toggler";
import Link from "next/link";

const NavBar: FC = () => {
    return (
        <nav className="z-50 p-4 w-full flex justify-between sticky top-0 backdrop-blur-lg bg-background/30">
            <Link href={"/"} className="text-2xl font-bold">
                Routine
            </Link>
            <ThemeToggler />
        </nav>
    );
};

NavBar.displayName = "NavBar";
export default NavBar;
    