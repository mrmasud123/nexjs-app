"use client";

import * as React from "react";
import Link from "next/link";
import {
    CameraIcon,
    MapPinIcon,
    PackageIcon,
    PencilLineIcon,
    PlusIcon,
    ShieldCheckIcon,
    Trash2Icon,
} from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import {
    Tabs,
    TabsIndicator,
    TabsList,
    TabsPanel,
    TabsTab,
} from "@/components/ui/tabs";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
    InputGroupTextarea,
} from "@/components/ui/input-group";
import { PasswordInput } from "@/components/password-input";
import { ThemeToggle } from "@/components/theme-toggle";

const stats = [
    { label: "Orders", value: "24" },
    { label: "Wishlist", value: "8" },
    { label: "Reviews", value: "12" },
];

const addresses = [
    {
        label: "Home",
        primary: true,
        name: "Jane Cooper",
        lines: ["4517 Washington Ave", "Manchester, Kentucky 39495"],
        phone: "+1 (398) 555‑0126",
    },
    {
        label: "Office",
        primary: false,
        name: "Jane Cooper",
        lines: ["2118 Thornridge Cir", "Syracuse, Connecticut 35624"],
        phone: "+1 (207) 555‑0119",
    },
];

const orders = [
    {
        id: "#EF‑10482",
        date: "Jun 28, 2026",
        items: "3 items",
        total: "$186.00",
        status: "Delivered" as const,
    },
    {
        id: "#EF‑10411",
        date: "Jun 09, 2026",
        items: "1 item",
        total: "$42.00",
        status: "In transit" as const,
    },
    {
        id: "#EF‑10309",
        date: "May 22, 2026",
        items: "5 items",
        total: "$310.50",
        status: "Delivered" as const,
    },
    {
        id: "#EF‑10214",
        date: "May 02, 2026",
        items: "2 items",
        total: "$76.20",
        status: "Cancelled" as const,
    },
];

const statusVariant: Record<
    (typeof orders)[number]["status"],
    "success" | "warning" | "destructive"
> = {
    Delivered: "success",
    "In transit": "warning",
    Cancelled: "destructive",
};

export default function ProfilePage() {
    return (
        <div className="mx-auto w-full max-w-5xl px-6 py-10 md:px-8">
            <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
                <div className="space-y-1">
                    <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
                        efferd / account
                    </p>
                    <h1 className="font-bold text-2xl tracking-wide text-primary">
                        My profile
                    </h1>
                </div>
                <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <Button variant="outline">
                        <Link href={"/"}>Back to store</Link>
                    </Button>
                </div>
            </header>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[280px_1fr]">
                {/* Summary sidebar */}
                <aside className="space-y-6">
                    <div className="rounded-lg border border-border p-6 text-center">
                        <div className="relative mx-auto w-fit">
                            <Avatar className="size-20">
                                <AvatarFallback className="text-lg">JC</AvatarFallback>
                            </Avatar>
                            <button
                                type="button"
                                aria-label="Change profile photo"
                                className="absolute -right-1 -bottom-1 flex size-6 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:text-foreground"
                            >
                                <CameraIcon className="size-3.5" />
                            </button>
                        </div>
                        <h2 className="mt-4 font-semibold text-base text-foreground">
                            Jane Cooper
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            jane.cooper@example.com
                        </p>
                        <Badge variant="secondary" className="mt-3">
                            Member since 2023
                        </Badge>
                    </div>

                    <div className="divide-y divide-border rounded-lg border border-border">
                        {stats.map((stat) => (
                            <div
                                key={stat.label}
                                className="flex items-center justify-between px-4 py-3 text-sm"
                            >
                                <span className="text-muted-foreground">{stat.label}</span>
                                <span className="font-medium text-foreground">
                                    {stat.value}
                                </span>
                            </div>
                        ))}
                    </div>
                </aside>

                {/* Main content */}
                <div>
                    <Tabs defaultValue="personal">
                        <TabsList>
                            <TabsTab value="personal">Personal</TabsTab>
                            <TabsTab value="addresses">Addresses</TabsTab>
                            <TabsTab value="orders">Orders</TabsTab>
                            <TabsTab value="security">Security</TabsTab>
                            <TabsIndicator />
                        </TabsList>

                        {/* Personal info */}
                        <TabsPanel value="personal">
                            <div className="rounded-lg border border-border p-6">
                                <div className="mb-5 space-y-1">
                                    <h3 className="font-semibold text-foreground">
                                        Personal information
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Update your name and contact details.
                                    </p>
                                </div>

                                <form className="space-y-4">
                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        <div className="space-y-1.5">
                                            <Label htmlFor="first-name">First name</Label>
                                            <InputGroupInputWrapped
                                                id="first-name"
                                                defaultValue="Jane"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="last-name">Last name</Label>
                                            <InputGroupInputWrapped
                                                id="last-name"
                                                defaultValue="Cooper"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        <div className="space-y-1.5">
                                            <Label htmlFor="email">Email</Label>
                                            <InputGroupInputWrapped
                                                id="email"
                                                type="email"
                                                defaultValue="jane.cooper@example.com"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="phone">Phone</Label>
                                            <InputGroupInputWrapped
                                                id="phone"
                                                type="tel"
                                                defaultValue="+1 (398) 555-0126"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <Label htmlFor="bio">Bio</Label>
                                        <InputGroup>
                                            <InputGroupTextarea
                                                id="bio"
                                                rows={3}
                                                defaultValue="Loves minimal design, fast checkouts, and free returns."
                                            />
                                        </InputGroup>
                                    </div>

                                    <Separator className="my-2" />

                                    <div className="flex justify-end gap-2">
                                        <Button type="button" variant="ghost">
                                            Cancel
                                        </Button>
                                        <Button type="button">Save changes</Button>
                                    </div>
                                </form>
                            </div>
                        </TabsPanel>

                        {/* Addresses */}
                        <TabsPanel value="addresses">
                            <div className="space-y-3">
                                {addresses.map((address) => (
                                    <div
                                        key={address.label}
                                        className="flex items-start justify-between gap-4 rounded-lg border border-border p-5"
                                    >
                                        <div className="flex gap-3">
                                            <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                                                <MapPinIcon className="size-4" />
                                            </div>
                                            <div className="space-y-0.5">
                                                <div className="flex items-center gap-2">
                                                    <span className="font-medium text-foreground text-sm">
                                                        {address.label}
                                                    </span>
                                                    {address.primary ? (
                                                        <Badge variant="secondary">Default</Badge>
                                                    ) : null}
                                                </div>
                                                <p className="text-sm text-muted-foreground">
                                                    {address.name}
                                                </p>
                                                {address.lines.map((line) => (
                                                    <p
                                                        key={line}
                                                        className="text-sm text-muted-foreground"
                                                    >
                                                        {line}
                                                    </p>
                                                ))}
                                                <p className="text-sm text-muted-foreground">
                                                    {address.phone}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex shrink-0 gap-1">
                                            <Button
                                                aria-label="Edit address"
                                                size="icon-sm"
                                                type="button"
                                                variant="ghost"
                                            >
                                                <PencilLineIcon />
                                            </Button>
                                            <Button
                                                aria-label="Remove address"
                                                size="icon-sm"
                                                type="button"
                                                variant="ghost"
                                            >
                                                <Trash2Icon />
                                            </Button>
                                        </div>
                                    </div>
                                ))}

                                <Button type="button" variant="outline" className="w-full">
                                    <PlusIcon data-icon="inline-start" />
                                    Add new address
                                </Button>
                            </div>
                        </TabsPanel>

                        {/* Orders */}
                        <TabsPanel value="orders">
                            <div className="overflow-hidden rounded-lg border border-border">
                                <div className="hidden grid-cols-[1fr_auto_auto_auto_auto] gap-4 border-b border-border bg-muted/50 px-5 py-2.5 text-xs font-medium text-muted-foreground uppercase tracking-wide sm:grid">
                                    <span>Order</span>
                                    <span>Date</span>
                                    <span>Items</span>
                                    <span>Total</span>
                                    <span>Status</span>
                                </div>
                                <ul className="divide-y divide-border">
                                    {orders.map((order) => (
                                        <li
                                            key={order.id}
                                            className="grid grid-cols-2 items-center gap-2 px-5 py-4 text-sm sm:grid-cols-[1fr_auto_auto_auto_auto] sm:gap-4"
                                        >
                                            <div className="flex items-center gap-2.5">
                                                <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                                                    <PackageIcon className="size-4" />
                                                </div>
                                                <span className="font-medium text-foreground">
                                                    {order.id}
                                                </span>
                                            </div>
                                            <span className="text-muted-foreground">
                                                {order.date}
                                            </span>
                                            <span className="text-muted-foreground">
                                                {order.items}
                                            </span>
                                            <span className="font-medium text-foreground">
                                                {order.total}
                                            </span>
                                            <span className="justify-self-end sm:justify-self-auto">
                                                <Badge variant={statusVariant[order.status]}>
                                                    {order.status}
                                                </Badge>
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsPanel>

                        {/* Security */}
                        <TabsPanel value="security">
                            <div className="space-y-4">
                                <div className="rounded-lg border border-border p-6">
                                    <div className="mb-5 space-y-1">
                                        <h3 className="font-semibold text-foreground">
                                            Change password
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            Choose a strong password you don&apos;t use elsewhere.
                                        </p>
                                    </div>
                                    <form className="space-y-4">
                                        <div className="space-y-1.5">
                                            <Label htmlFor="current-password">
                                                Current password
                                            </Label>
                                            <PasswordInput
                                                id="current-password"
                                                autoComplete="current-password"
                                            />
                                        </div>
                                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                            <div className="space-y-1.5">
                                                <Label htmlFor="new-password">New password</Label>
                                                <PasswordInput
                                                    id="new-password"
                                                    autoComplete="new-password"
                                                />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="confirm-new-password">
                                                    Confirm new password
                                                </Label>
                                                <PasswordInput
                                                    id="confirm-new-password"
                                                    autoComplete="new-password"
                                                />
                                            </div>
                                        </div>
                                        <Separator className="my-2" />
                                        <div className="flex justify-end">
                                            <Button type="button">Update password</Button>
                                        </div>
                                    </form>
                                </div>

                                <div className="rounded-lg border border-border p-6">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex gap-3">
                                            <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                                                <ShieldCheckIcon className="size-4" />
                                            </div>
                                            <div className="space-y-0.5">
                                                <h3 className="font-semibold text-foreground text-sm">
                                                    Two-factor authentication
                                                </h3>
                                                <p className="text-sm text-muted-foreground">
                                                    Add an extra layer of security to your account.
                                                </p>
                                            </div>
                                        </div>
                                        <Switch defaultChecked aria-label="Toggle two-factor authentication" />
                                    </div>
                                </div>
                            </div>
                        </TabsPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}

function InputGroupInputWrapped(props: React.ComponentProps<typeof InputGroupInput>) {
    return (
        <InputGroup>
            <InputGroupInput {...props} />
        </InputGroup>
    );
}
