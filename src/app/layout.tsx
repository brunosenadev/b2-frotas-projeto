import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "B2 Personalização de Frotas",
  description: "Site B2 Personalização de Frotas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="PT-BR">
      <head>
        <link
          rel="preload"
          href="/home.jpeg"  // Caminho correto para a sua imagem
          as="image"
          type="image/png"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
