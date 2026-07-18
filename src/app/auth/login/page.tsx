import Link from "next/link";
import { AtSignIcon } from "lucide-react";

import { AuthCard } from "@/components/auth-card";
import { AuthDivider } from "@/components/auth-divider";
import { PasswordInput } from "@/components/password-input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group";
import { GoogleIcon } from "@/components/icons/google-icon";
import { GithubIcon } from "@/components/icons/github-icon";

export default function LoginPage() {
    return (
        <AuthCard
            eyebrow="efferd"
            title="Welcome back"
            description="Log in to pick up your cart where you left it."
            footer={
                <>
                    Don&apos;t have an account?{" "}
                    <Link
                        className="font-medium text-foreground underline underline-offset-4 hover:text-primary"
                        href="/auth/signup"
                    >
                        Create one
                    </Link>
                </>
            }
        >
            <form className="space-y-4">
                <div className="space-y-1.5">
                    <Label htmlFor="login-email">Email</Label>
                    <InputGroup>
                        <InputGroupInput
                            id="login-email"
                            placeholder="your.email@example.com"
                            type="email"
                            autoComplete="email"
                        />
                        <InputGroupAddon align="inline-start">
                            <AtSignIcon />
                        </InputGroupAddon>
                    </InputGroup>
                </div>

                <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="login-password">Password</Label>
                        <Link
                            className="text-xs text-muted-foreground underline underline-offset-4 hover:text-primary"
                            href="/auth/forgot-password"
                        >
                            Forgot password?
                        </Link>
                    </div>
                    <PasswordInput id="login-password" autoComplete="current-password" />
                </div>

                <div className="flex items-center gap-2">
                    <Checkbox id="login-remember" defaultChecked />
                    <Label htmlFor="login-remember" className="font-normal text-muted-foreground">
                        Keep me signed in
                    </Label>
                </div>

                <Button className="w-full" type="button">
                    Log in
                </Button>
            </form>

            <AuthDivider>OR</AuthDivider>

            <div className="grid grid-cols-2 gap-2">
                <Button className="w-full" type="button" variant="outline">
                    <GoogleIcon data-icon="inline-start" />
                    Google
                </Button>
                <Button className="w-full" type="button" variant="outline">
                    <GithubIcon data-icon="inline-start" />
                    GitHub
                </Button>
            </div>
        </AuthCard>
    );
}
