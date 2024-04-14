import { FC, SyntheticEvent, useState } from 'react';

const UrlDisplay: FC<{url: string}> = ({ url }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (event: SyntheticEvent) => {
    event.preventDefault();

    navigator.clipboard.writeText(url);

    setCopied(true);
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg flex items-center">
      <input
        type="text"
        value={url}
        readOnly
        className="flex-1 bg-transparent border-b-2 border-gray-600 text-lg p-1 mr-2"
      />
      <button
        onClick={copyToClipboard}
        className="bg-gray-800 text-gray-200 hover:bg-gray-700 px-3 py-1 rounded-md focus:outline-none"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
};

export default UrlDisplay;
