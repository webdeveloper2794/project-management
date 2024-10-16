import localFont from "next/font/local";
import {Inter, Poppins} from 'next/font/google';
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const popppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ["100" , "200" , "300" , "400" , "500" , "600" ,"700" , "800" , "900"]
})
export const metadata = {
  title: "Project Management",
  description: "Abdurrohman Dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${popppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
