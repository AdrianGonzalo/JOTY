import localFont from "next/font/local";
import "./globals.css";

const overwacht = localFont({
  src: "./fonts/big_noodle_titling.ttf",
  variable: "--font-overwacht",
  weight: "100 900",
})

export const metadata = {
  title: "JOTY",
  description: "website to show the james bond",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${overwacht.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}