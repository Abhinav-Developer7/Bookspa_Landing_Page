
import "./globals.css";

export const metadata = {
  title: "Benzo Technologies | Innovative Technology Solutions",
  description:
    "Benzo Technologies delivers modern technology solutions to help businesses innovate and grow.",
  openGraph: {
    title: "Benzo Technologies",
    description: "Technology that moves your business forward.",
    // url: "https://benzotechnologies.com",
    siteName: "Benzo Technologies",
    images: [{ url: "/image/logo.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
