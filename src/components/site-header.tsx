import Link from "next/link";
import { MenuIcon, SearchIcon, ShoppingCartIcon, UserIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group";

const navLinks = [
    { label: "Shop", href: "#products" },
    { label: "Categories", href: "#categories" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
];

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-sm">
            <div className="mx-auto flex h-14 w-full max-w-6xl items-center gap-4 px-6 md:px-8">
                <Button
                    className="md:hidden"
                    size="icon-sm"
                    type="button"
                    variant="ghost"
                    aria-label="Open menu"
                >
                    <MenuIcon />
                </Button>

                <Link href="/" className="flex items-center gap-2 font-bold text-primary tracking-wide">
                    {process.env.APP_NAME}
                </Link>

                <nav className="hidden items-center gap-6 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="hidden flex-1 justify-center lg:flex">
                    <InputGroup className="max-w-xs">
                        <InputGroupInput placeholder="Search products…" />
                        <InputGroupAddon align="inline-start">
                            <SearchIcon />
                        </InputGroupAddon>
                    </InputGroup>
                </div>

                <div className="ml-auto flex items-center gap-1">
                    <ThemeToggle />
                    <Button
                        aria-label="Cart"
                        size="icon-sm"
                        type="button"
                        variant="ghost"

                    >
                        <Link href="#">
                            <ShoppingCartIcon />
                        </Link>
                    </Button>
                    <Button
                        aria-label="Account"
                        size="icon-sm"
                        type="button"
                        variant="ghost"

                    >
                        <Link href="/auth/login">

                            <UserIcon />
                        </Link>
                    </Button>
                </div>
            </div>
        </header>
    );
}
