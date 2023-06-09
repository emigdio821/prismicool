import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="text-zinc-800 dark:bg-zinc-900 dark:text-zinc-200">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
