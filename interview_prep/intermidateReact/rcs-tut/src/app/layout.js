import Link from "next/link";
import "doodle.css/doodle.css";
import "./globals.css";
import { Html } from "next/document";

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dooble">
        <nav>
          <h1></h1>
        </nav>
      </body>
    </html>
  );
}
