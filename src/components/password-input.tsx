"use client";

import * as React from "react";
import { EyeIcon, EyeOffIcon, LockIcon } from "lucide-react";

import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
} from "@/components/ui/input-group";

export function PasswordInput({
    placeholder = "••••••••",
    ...props
}: Omit<React.ComponentProps<typeof InputGroupInput>, "type">) {
    const [visible, setVisible] = React.useState(false);

    return (
        <InputGroup>
            <InputGroupInput
                placeholder={placeholder}
                type={visible ? "text" : "password"}
                {...props}
            />
            <InputGroupAddon align="inline-start">
                <LockIcon />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">
                <InputGroupButton
                    aria-label={visible ? "Hide password" : "Show password"}
                    onClick={() => setVisible((v) => !v)}
                    size="icon-xs"
                    type="button"
                >
                    {visible ? <EyeOffIcon /> : <EyeIcon />}
                </InputGroupButton>
            </InputGroupAddon>
        </InputGroup>
    );
}

export default PasswordInput;
