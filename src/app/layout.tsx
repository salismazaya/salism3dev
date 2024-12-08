import type { Metadata } from 'next';
import './globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import SetupComponent from '../components/SetupComponent';

export const metadata: Metadata = {
  title: 'Salis Mazaya',
  description: 'Salis Mazaya Personal Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="Salis Mazaya" />
        <meta property="og:type" content="personal website" />
        <meta property="og:url" content="https://salism3.dev" />
        <meta property="og:image" content="https://salism3.dev/gajahpetir.jpg" />
      </head>
      <body className="font-mono">
        <SetupComponent>
          {children}
        </SetupComponent>
      </body>
    </html>
  )
}
