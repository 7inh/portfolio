import { Alert } from "@mui/material";
import { ComponentProps } from "react";

export type ArrayElement<A> = A extends readonly (infer T)[] ? T : never;

export type ANY = any;

export interface IdValue {
    id: string;
    value: string;
}

export interface Message {
    key: string;
    role: "user" | "assistant";
    content: string;
    timestamp?: string;
    attachments?: string[];
    replyTimeJS?: number;
    showBorder?: boolean;
}

export interface MyCustomEventDetail {
    message: string;
    severity: ComponentProps<typeof Alert>["severity"];
}

export interface JSONObj {
    [key: string]: ANY;
}

export interface Route {
    path: string;
    name: string;
    icon: string;
}

export interface Project {
    id: string;
    name: string;
    description: string;
    images: string[];
    url: string;
}
