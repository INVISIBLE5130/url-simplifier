import { FC, useEffect, useState } from 'react'
import Form from '../../components/form'
import { Button, Input } from '../../components/common'
import { useNavigate } from 'react-router-dom'

const buttons: Record<string, string> = {
  simplify: "Simplify",
  openURL: "Open URL"
}

const App: FC = () => {
  const navigate = useNavigate();
  const [shortURL, setShortURL] = useState("");
  const urlMappings: Record<string, string> = {};

  const shortenUrlHandler = (originalUrl: string) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const shortUrlLength = 6;
    let shortUrl = '';

    // Generate a short URL
    for (let i = 0; i < shortUrlLength; i++) {
      shortUrl += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    // Check if the generated short URL already exists, if so, regenerate
    while (urlMappings[shortUrl]) {
      for (let i = 0; i < shortUrlLength; i++) {
        shortUrl += characters.charAt(Math.floor(Math.random() * characters.length));
      }
    }

    // Store the mapping
    urlMappings[shortUrl] = originalUrl;

    return shortUrl;
  }

  const getOriginalUrl = (shortUrl: string) => {
    return urlMappings[shortUrl];
  }

  const urlSimplifyHandler = (value: string, buttonType: string) => {
    const shortUrl = shortenUrlHandler(value);
    const originalUrl = getOriginalUrl(shortUrl);
    const simplifiedURL = `${window.location.origin}/url/${shortUrl}`;

    localStorage.setItem(simplifiedURL.slice(-6), originalUrl);

    if (buttonType === buttons.simplify) {
      setShortURL(simplifiedURL);
    } else {
      navigate(`/url/${shortUrl}`, { state: { url: originalUrl } });
    }
  }

  useEffect(() => {
    if (localStorage.length > 25) {
      localStorage.clear();
    }
  }, []);

  return (
    <main className='flex flex-col items-center justify-center h-full'>
      <Form onSubmit={urlSimplifyHandler}>
        <div className='flex flex-col gap-4'>
          <Input placeholder="Enter your url..." shortURL={shortURL}/>
          <div className='flex justify-betwee gap-4'>
            <Button name={buttons.simplify}/>
            <Button name={buttons.openURL}/>
          </div>
        </div>
      </Form>
    </main>
  )
}

export default App
