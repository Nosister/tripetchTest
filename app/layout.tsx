import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";

import {ThemeProvider} from "@mui/material/styles";
import {theme} from "../utils/theme";
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: ['100', '300' ,'400','500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
})
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
     
      <body 
      className={roboto.className}
      >
 
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
            </body>
    </html>
  );
}
