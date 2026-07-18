import Link from "next/link";

import { Separator } from "@/components/ui/separator";

const footerColumns = [
    {
        title: "Shop",
        links: ["New arrivals", "Best sellers", "Sale", "Gift cards"],
    },
    {
        title: "Support",
        links: ["Help center", "Shipping", "Returns", "Track order"],
    },
    {
        title: "Company",
        links: ["About", "Careers", "Press", "Sustainability"],
    },
];

export function SiteFooter() {
    return (
        <footer className="border-t border-border">
            <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-5 md:px-8">
                <div className="col-span-2 space-y-2">
                    <span className="font-bold text-primary tracking-wide">
                        efferd
                    </span>
                    <p className="max-w-xs text-sm text-muted-foreground">
                        Thoughtfully made goods, delivered with care. Minimal design,
                        maximal quality.
                    </p>
                </div>

                {footerColumns.map((column) => (
                    <div key={column.title} className="space-y-3">
                        <h3 className="text-sm font-medium text-foreground">
                            {column.title}
                        </h3>
                        <ul className="space-y-2">
                            {column.links.map((link) => (
                                <li key={link}>
                                    <Link
                                        href="#"
                                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <Separator />

            <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-muted-foreground text-xs sm:flex-row md:px-8">
                <span>© {new Date().getFullYear()} efferd. All rights reserved.</span>
                <div className="flex gap-4">
                    <Link href="#" className="hover:text-foreground">
                        Privacy
                    </Link>
                    <Link href="#" className="hover:text-foreground">
                        Terms
                    </Link>
                </div>
            </div>
        </footer>
    );
}
