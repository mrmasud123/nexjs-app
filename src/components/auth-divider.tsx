import { cn } from "@/lib/utils";

export function AuthDivider({
                                children,
                                className,
                            }: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={cn("flex items-center gap-3", className)}>
            <div className="h-px flex-1 bg-border" />
            <span className="text-muted-foreground text-xs uppercase tracking-wide">
				{children}
			</span>
            <div className="h-px flex-1 bg-border" />
        </div>
    );
}