import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";
import ContextAppProvider from "./Pages/contextApp";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const popppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata = {
  title: "Project Management",
  description: "Abdurrohman Dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
        <ContextAppProvider>
          <body
            className={`${geistSans.variable} ${popppins.variable} antialiased`}
          >
            <AppRouterCacheProvider options={{ key: 'css' }}>
              <CssBaseline />
            {children}
            </AppRouterCacheProvider>
          </body>
        </ContextAppProvider>
     
    </html>
  );
}
