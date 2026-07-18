import Link from "next/link";
import { AtSignIcon, UserIcon } from "lucide-react";

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

export default function SignupPage() {
    return (
        <AuthCard
            eyebrow="efferd"
            title="Create your account"
            description="Join to save carts, track orders, and check out faster."
            footer={
                <>
                    Already have an account?{" "}
                    <Link
                        className="font-medium text-foreground underline underline-offset-4 hover:text-primary"
                        href="/auth/login"
                    >
                        Log in
                    </Link>
                </>
            }
        >
            <form className="space-y-4">
                <div className="space-y-1.5">
                    <Label htmlFor="signup-name">Full name</Label>
                    <InputGroup>
                        <InputGroupInput
                            id="signup-name"
                            placeholder="Jane Cooper"
                            type="text"
                            autoComplete="name"
                        />
                        <InputGroupAddon align="inline-start">
                            <UserIcon />
                        </InputGroupAddon>
                    </InputGroup>
                </div>

                <div className="space-y-1.5">
                    <Label htmlFor="signup-email">Email</Label>
                    <InputGroup>
                        <InputGroupInput
                            id="signup-email"
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
                    <Label htmlFor="signup-password">Password</Label>
                    <PasswordInput id="signup-password" autoComplete="new-password" />
                    <p className="text-xs text-muted-foreground">
                        Use 8 or more characters with a mix of letters and numbers.
                    </p>
                </div>

                <div className="space-y-1.5">
                    <Label htmlFor="signup-confirm-password">Confirm password</Label>
                    <PasswordInput
                        id="signup-confirm-password"
                        autoComplete="new-password"
                    />
                </div>

                <div className="flex items-start gap-2 pt-1">
                    <Checkbox id="signup-terms" className="mt-0.5" />
                    <Label
                        htmlFor="signup-terms"
                        className="font-normal text-muted-foreground"
                    >
                        I agree to the{" "}
                        <a
                            className="underline underline-offset-4 hover:text-primary"
                            href="#"
                        >
                            Terms of Service
                        </a>{" "}
                        and{" "}
                        <a
                            className="underline underline-offset-4 hover:text-primary"
                            href="#"
                        >
                            Privacy Policy
                        </a>
                    </Label>
                </div>

                <Button className="w-full" type="button">
                    Create account
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
