"use client"

import { FC, useState } from "react"
import { Switch } from "../ui/switch";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggler: FC = () => {
    const { setTheme, resolvedTheme } = useTheme();
    const [ isDarkTheme, setIsDarkTheme ] = useState(resolvedTheme === "dark");

    const handleSwitchChange = () => {
        setIsDarkTheme(!isDarkTheme);
        setTheme(isDarkTheme ? "light" : "dark");
    };

    return (
        <div className="flex gap-4 items-center">
            <Sun className="dark:hidden" />
            <Moon className="hidden dark:block" />
            <Switch checked={isDarkTheme} onClick={handleSwitchChange} />
        </div>
    );
};

ThemeToggler.displayName = "ThemeToggler";
export default ThemeToggler;
    