import React, { FC, useState } from "react";
import { InputProps } from "../../../types";
import { URLValidationHandler } from "../../../helpers/index";
import UrlDisplay from "../../URLDisplay";

const Input: FC<InputProps> = ({ placeholder, shortURL }) => {
  const [url, setURL] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    const error = URLValidationHandler(input);
    
    setErrorMessage(error);
    
    !error && setURL(input);
  };

  return (
    <div className="flex flex-col gap-4">
      <input
        className="w-full rounded-lg border border-transparent px-3 py-2 text-base text-white font-medium bg-gray-800 focus:border-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-opacity-50 transition-colors"
        placeholder={placeholder}
        type="text"
        onChange={inputHandler}
        value={url}
      />
      {errorMessage && <p className="text-red-500 text-sm text-center">{errorMessage}</p>}
      {shortURL && <UrlDisplay url={shortURL} />}
    </div>
  );
};

export default Input;