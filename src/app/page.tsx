import Link from "next/link";
import {
    ArrowRightIcon,
    GemIcon,
    HeadphonesIcon,
    LaptopIcon,
    RotateCcwIcon,
    ShieldCheckIcon,
    ShirtIcon,
    SofaIcon,
    SparklesIcon,
    TruckIcon,
    WatchIcon,
    FootprintsIcon,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { DecorIcon } from "@/components/decor-icon";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
} from "@/components/ui/input-group";
import { ProductCard, type Product } from "@/components/product-card";

const categories = [
    { name: "Electronics", icon: LaptopIcon, count: "128 items" },
    { name: "Apparel", icon: ShirtIcon, count: "342 items" },
    { name: "Footwear", icon: FootprintsIcon, count: "96 items" },
    { name: "Accessories", icon: GemIcon, count: "154 items" },
    { name: "Audio", icon: HeadphonesIcon, count: "62 items" },
    { name: "Home & Living", icon: SofaIcon, count: "210 items" },
];

const products: Product[] = [
    {
        name: "Aria Wireless Headphones",
        category: "Audio",
        price: "$129.00",
        oldPrice: "$169.00",
        rating: 4,
        icon: HeadphonesIcon,
        badge: { label: "Sale", variant: "destructive" },
    },
    {
        name: "Meridian Chrono Watch",
        category: "Accessories",
        price: "$249.00",
        rating: 5,
        icon: WatchIcon,
        badge: { label: "New", variant: "default" },
    },
    {
        name: "Fold Slim Laptop 14”",
        category: "Electronics",
        price: "$1,099.00",
        rating: 5,
        icon: LaptopIcon,
    },
    {
        name: "Drift Canvas Sneakers",
        category: "Footwear",
        price: "$89.00",
        rating: 4,
        icon: FootprintsIcon,
        badge: { label: "Bestseller", variant: "secondary" },
    },
    {
        name: "Field Cotton Overshirt",
        category: "Apparel",
        price: "$74.00",
        rating: 4,
        icon: ShirtIcon,
    },
    {
        name: "Nimbus Lounge Sofa",
        category: "Home & Living",
        price: "$899.00",
        oldPrice: "$1,020.00",
        rating: 5,
        icon: SofaIcon,
        badge: { label: "Sale", variant: "destructive" },
    },
    {
        name: "Halo Signet Ring",
        category: "Accessories",
        price: "$59.00",
        rating: 4,
        icon: GemIcon,
    },
    {
        name: "Pulse Bluetooth Speaker",
        category: "Audio",
        price: "$79.00",
        rating: 3,
        icon: HeadphonesIcon,
        badge: { label: "New", variant: "default" },
    },
];

const valueProps = [
    {
        icon: TruckIcon,
        title: "Free shipping",
        description: "On all orders over $75",
    },
    {
        icon: RotateCcwIcon,
        title: "Easy returns",
        description: "30-day return window",
    },
    {
        icon: ShieldCheckIcon,
        title: "Secure checkout",
        description: "256-bit encrypted payments",
    },
];

export default function Home() {
    return (
        <>
            <SiteHeader />

            <main className="flex-1">
                {/* Hero */}
                <section className="relative overflow-hidden border-b border-border">
                    <div
                        className="absolute inset-0 opacity-[0.4] [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]"
                        aria-hidden="true"
                    />

                    <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-6 py-20 text-center md:px-8 md:py-28">
                        <Badge variant="secondary" className="gap-1.5">
                            <SparklesIcon /> New season, new arrivals
                        </Badge>

                        <h1 className="max-w-2xl font-bold text-4xl text-primary tracking-tight md:text-5xl">
                            Goods made to last, priced to make sense
                        </h1>
                        <p className="max-w-md text-base text-muted-foreground">
                            Thoughtfully designed essentials across electronics, apparel,
                            and home — curated for people who care about quality.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                            <Button >
                                <Link href="#products" className={"flex items-center justify-center"}>
                                    Shop the collection
                                    <ArrowRightIcon data-icon="inline-end" />
                                </Link>

                            </Button>
                            <Button variant="outline">
                                <Link href="#categories">Browse categories</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Value props */}
                <section className="border-b border-border">
                    <div className="mx-auto grid w-full max-w-6xl grid-cols-1 divide-y divide-border px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:px-8">
                        {valueProps.map((item) => (
                            <div
                                key={item.title}
                                className="flex items-center gap-3 px-4 py-6 first:pl-0 last:pr-0"
                            >
                                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground">
                                    <item.icon className="size-4" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-foreground">
                                        {item.title}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Categories */}
                <section id="categories" className="mx-auto w-full max-w-6xl px-6 py-16 md:px-8">
                    <div className="mb-8 flex items-end justify-between gap-4">
                        <div className="space-y-1">
                            <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
                                Browse
                            </p>
                            <h2 className="font-bold text-2xl text-primary tracking-wide">
                                Shop by category
                            </h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                        {categories.map((category) => (
                            <Link
                                key={category.name}
                                href="#"
                                className="group flex flex-col items-center gap-2.5 rounded-lg border border-border p-5 text-center transition-colors hover:border-foreground/20 hover:bg-muted/40"
                            >
                                <div className="flex size-10 items-center justify-center rounded-full bg-muted text-foreground transition-transform group-hover:scale-105">
                                    <category.icon className="size-4.5" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-foreground">
                                        {category.name}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        {category.count}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Featured products */}
                <section id="products" className="border-t border-border bg-muted/20">
                    <div className="mx-auto w-full max-w-6xl px-6 py-16 md:px-8">
                        <div className="mb-8 flex items-end justify-between gap-4">
                            <div className="space-y-1">
                                <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
                                    Featured
                                </p>
                                <h2 className="font-bold text-2xl text-primary tracking-wide">
                                    Popular right now
                                </h2>
                            </div>
                            <Button variant="ghost" >
                                <Link href="#" className={"flex items-center justify-center"}>
                                    View all
                                    <ArrowRightIcon data-icon="inline-end" />
                                </Link>
                            </Button>
                        </div>

                        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                            {products.map((product) => (
                                <ProductCard key={product.name} product={product} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Promo banner */}
                <section className="mx-auto w-full max-w-6xl px-6 py-16 md:px-8">
                    <div className="relative overflow-hidden rounded-lg border border-border p-8 md:p-12">
                        <DecorIcon position="top-left" />
                        <DecorIcon position="top-right" />
                        <DecorIcon position="bottom-left" />
                        <DecorIcon position="bottom-right" />

                        <div className="relative flex flex-col items-start gap-4 md:max-w-md">
                            <Badge>Limited time</Badge>
                            <h2 className="font-bold text-2xl text-primary tracking-wide md:text-3xl">
                                Get 20% off your first order
                            </h2>
                            <p className="text-sm text-muted-foreground">
                                Create an account and use code{" "}
                                <span className="font-medium text-foreground">WELCOME20</span>{" "}
                                at checkout.
                            </p>
                            <Button>
                                <Link href="/auth/signup" className={"flex items-center justify-center"}>
                                    Create an account
                                    <ArrowRightIcon data-icon="inline-end" />
                                </Link>

                            </Button>
                        </div>
                    </div>
                </section>

                {/* Newsletter */}
                <section className="border-t border-border">
                    <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 px-6 py-16 text-center md:px-8">
                        <h2 className="font-bold text-2xl text-primary tracking-wide">
                            Stay in the loop
                        </h2>
                        <p className="max-w-sm text-sm text-muted-foreground">
                            Get first access to new drops, restocks, and members-only
                            offers. No spam, unsubscribe anytime.
                        </p>
                        <form className="w-full max-w-sm pt-2">
                            <InputGroup>
                                <InputGroupInput
                                    type="email"
                                    placeholder="your.email@example.com"
                                    aria-label="Email address"
                                />
                                <InputGroupAddon align="inline-end">
                                    <InputGroupButton
                                        type="submit"
                                        variant="default"
                                        size="sm"
                                        className="px-3"
                                    >
                                        Subscribe
                                    </InputGroupButton>
                                </InputGroupAddon>
                            </InputGroup>
                        </form>
                    </div>
                </section>
            </main>

            <SiteFooter />
        </>
    );
}
