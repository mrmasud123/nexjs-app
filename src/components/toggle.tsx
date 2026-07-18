"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ThemeToggle({
                                className,
                            }: {
    className?: string;
}) {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);
    // Avoids a hydration mismatch: the server doesn't know the user's
    // stored preference, so we render a stable placeholder until mounted.
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional hydration-safe mount flag
    React.useEffect(() => setMounted(true), []);

    if (!mounted) {
        return (
            <Button
                aria-label="Toggle theme"
                className={className}
                size="icon-sm"
                variant="ghost"
                disabled
            >
                <SunIcon />
            </Button>
        );
    }

    const isDark = resolvedTheme === "dark";

    return (
        <Button
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className={className}
            size="icon-sm"
            type="button"
            variant="ghost"
            onClick={() => setTheme(isDark ? "light" : "dark")}
        >
            {isDark ? <SunIcon /> : <MoonIcon />}
        </Button>
    );
}

export default ThemeToggle;