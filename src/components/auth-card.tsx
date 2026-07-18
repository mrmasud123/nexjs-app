import { cn } from "@/lib/utils";
import { DecorIcon } from "@/components/decor-icon";
import { ThemeToggle } from "@/components/theme-toggle";

export function AuthCard({
    eyebrow,
    title,
    description,
    children,
    footer,
    className,
}: {
    eyebrow?: string;
    title: string;
    description?: string;
    children: React.ReactNode;
    footer?: React.ReactNode;
    className?: string;
}) {
    return (
        <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6 py-16 md:px-8">
            <ThemeToggle className="absolute top-6 right-6 z-10" />
            <div
                className={cn(
                    "relative flex w-full max-w-sm flex-col justify-between p-6 md:p-8",
                    "dark:bg-[radial-gradient(50%_80%_at_20%_0%,--theme(--color-foreground/.1),transparent)]",
                    className
                )}
            >
                <div className="absolute -inset-y-6 -left-px w-px bg-border" />
                <div className="absolute -inset-y-6 -right-px w-px bg-border" />
                <div className="absolute -inset-x-6 -top-px h-px bg-border" />
                <div className="absolute -inset-x-6 -bottom-px h-px bg-border" />
                <DecorIcon position="top-left" />
                <DecorIcon position="top-right" />
                <DecorIcon position="bottom-left" />
                <DecorIcon position="bottom-right" />

                <div className="w-full max-w-sm animate-in space-y-8">
                    <div className="flex flex-col space-y-1.5">
                        {eyebrow ? (
                            <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
                                {eyebrow}
                            </span>
                        ) : null}
                        <h1 className="font-bold text-2xl tracking-wide text-primary">
                            {title}
                        </h1>
                        {description ? (
                            <p className="text-base text-muted-foreground">
                                {description}
                            </p>
                        ) : null}
                    </div>

                    <div className="space-y-6">{children}</div>

                    {footer ? (
                        <p className="text-center text-muted-foreground text-sm">
                            {footer}
                        </p>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default AuthCard;
