import { ReactNode } from "react";

export interface FormProps {
    children: ReactNode;
    onSubmit: (value: string, buttonType: string) => void;
}

export interface InputProps {
    placeholder: string;
    shortURL: string;
} 

export interface ButtonsProps {
    name: string;
}