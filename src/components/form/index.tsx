import { FC, FormEvent } from "react";
import { FormProps } from "../../types";

const Form: FC<FormProps> = ({ children, onSubmit }) => {
    const formSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formElement = event.target as HTMLFormElement;
        const input = formElement[0] as HTMLInputElement;
        const inputValue: string = input.value;

        const nativeEvent = event.nativeEvent as Event & { submitter: HTMLButtonElement };
        const buttonType: string = nativeEvent.submitter.innerHTML;

        onSubmit(inputValue, buttonType);
    }

    return (
        <form onSubmit={formSubmitHandler} className="flex flex-col w-1/2">
            {children}
        </form>
    )
}

export default Form;