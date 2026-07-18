import { HeartIcon, StarIcon, type LucideIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type Product = {
    name: string;
    category: string;
    price: string;
    oldPrice?: string;
    rating: number;
    icon: LucideIcon;
    badge?: { label: string; variant: "default" | "destructive" | "secondary" };
};

export function ProductCard({ product }: { product: Product }) {
    const Icon = product.icon;

    return (
        <div className="group relative flex flex-col overflow-hidden rounded-lg border border-border transition-colors hover:border-foreground/20">
            <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-muted/50">
                <div
                    className="absolute inset-0 opacity-60 [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:16px_16px]"
                    aria-hidden="true"
                />
                <Icon
                    className="relative size-10 text-muted-foreground/60 transition-transform duration-300 group-hover:scale-110"
                    strokeWidth={1.25}
                />

                {product.badge ? (
                    <Badge
                        variant={product.badge.variant}
                        className="absolute top-2.5 left-2.5"
                    >
                        {product.badge.label}
                    </Badge>
                ) : null}

                <Button
                    aria-label="Add to wishlist"
                    className="absolute top-2 right-2 bg-background/80 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100"
                    size="icon-sm"
                    type="button"
                    variant="ghost"
                >
                    <HeartIcon />
                </Button>
            </div>

            <div className="flex flex-1 flex-col gap-1 p-3.5">
                <span className="text-xs text-muted-foreground">
                    {product.category}
                </span>
                <h3 className="text-sm font-medium text-foreground">
                    {product.name}
                </h3>

                <div className="mt-0.5 flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <StarIcon
                            key={i}
                            className={cn(
                                "size-3",
                                i < product.rating
                                    ? "fill-primary text-primary"
                                    : "fill-none text-border"
                            )}
                        />
                    ))}
                </div>

                <div className="mt-1.5 flex items-baseline gap-2">
                    <span className="font-semibold text-foreground text-sm">
                        {product.price}
                    </span>
                    {product.oldPrice ? (
                        <span className="text-muted-foreground text-xs line-through">
                            {product.oldPrice}
                        </span>
                    ) : null}
                </div>
            </div>
        </div>
    );
}
