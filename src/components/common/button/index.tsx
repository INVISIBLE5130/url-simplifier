import { FC } from "react";
import { ButtonsProps } from "../../../types";

const Button: FC<ButtonsProps> = ({name}) => (
    <button className="w-full rounded-lg border border-transparent px-3 py-2 text-base font-medium bg-gray-900 text-white hover:border-indigo-600 focus:border-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-opacity-50 transition-colors">
        {name}
    </button>
)

export default Button;