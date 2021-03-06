import '../reset.css'

import Head from 'next/head'
import { AppProps } from 'next/app'

export default ({ Component, pageProps }: AppProps) => (
  <div className='dark-theme container'>
    <Head>
      <link href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;400i;700i&display=swap' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&display=swap' rel='stylesheet' />

      <link href='/icon.png' rel='icon' />
      <link href='/icon.png' rel='shortcut icon' />
      <link href='/icon.png' rel='favicon' />

      <link href='/icon.svg' rel='icon' />
      <link href='/icon.svg' rel='shortcut icon' />
      <link href='/icon.svg' rel='favicon' />

      <link rel='manifest' href='/manifest.json' />
      <meta name='theme-color' content='#16171A' />
      <meta
        name='description'
        content='A dead simple end-to-end encrypted chat platform.'
      />
    </Head>
    <Component {...pageProps} />

    <style jsx>{`
      .container {
        height: 100vh;
      }
    `}</style>

    <style jsx global>{`
      .dark-theme {
        --heading-primary: #FFFFFF;
        --heading-secondary: #B9BBBE;

        --text-normal: #DDDDDD;
        --text-muted: #72767D;

        --background-main: #16171A;
        --background-chat: #202225;
        --background-input: #272A2E;
        --background-header: #16171A;

        --interactive-normal: #B9BBBE;
        --interactive-hover: #FFFFFF;

        --ghost: #272A2E;
        --accent: #3F51B5;
        --yellow: #FFE066;
        --blue: #74C0FC;
      }

      body {
        font-family: 'Inter', sans-serif;

        --radius-lg: 8px;
        --radius-sm: 4px;

        --font-scale: 1;
        --font-lg: calc(2rem * var(--font-scale));
        --font-md: calc(1rem * var(--font-scale));
        --font-sm: calc(0.875rem * var(--font-scale));

        --field-height: calc(2.25rem * var(--font-scale));
      }

      pre, code {
        font-family: 'Fira Code', monospace;
      }

      .ReactModal__Content {
        background-color: var(--background-main);
        border-radius: var(--radius-lg);
        padding: 16px;
        max-width: 440px;
        width: 100%;
        box-sizing: border-box;
      }

      .ReactModal__Overlay {
        position: fixed;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        background-color: rgba(0, 0, 0, 0.85);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 200ms ease-in;
      }

      .ReactModal__Overlay--after-open{
        opacity: 1;
      }

      .ReactModal__Overlay--before-close{
        opacity: 0;
      }

      .message-markdown code {
        background-color: var(--background-main);
        padding: 2px;
        border-radius: 2px 4px;
        color: var(--yellow);
      }

      .message-markdown strong {
        font-weight: 700;
      }

      .message-markdown em {
        font-style: italic;
      }

      .message-markdown a {
        color: var(--blue);
        text-decoration: none;
      }

      .message-markdown a:hover {
        text-decoration: underline;
      }
    `}</style>
  </div>
)