import localFont from 'next/font/local';
import "./globals.css";
import AssetElixirHeader from "@/components/Navbar";
import {Montserrat} from 'next/font/google';
import { AuthContextProvider } from '@/context/AuthContext';
import { BlogContextProvider } from '@/context/BlogContext';

const georgiaRegular = localFont({
  src: './fonts/georgia.woff',
  variable: '--font-georgia_reg',          // Variable name for Tailwind
  display: 'swap',
})

const georgiaBold    = localFont({
  src: './fonts/georgiab.woff',
  variable: '--font-georgia_bold',          // Variable name for Tailwind
  display: 'swap',
})

const notoSerifRegular = localFont({
  src: './fonts/NotoSerif-Regular.woff',
  variable: '--font-noto_reg',          // Variable name for Tailwind
  display: 'swap',
})

const notoSerifBold  = localFont({
  src: "./fonts/NotoSerif-Bold.woff",
  variable: '--font-noto_bold',          // Variable name for Tailwind
  display: 'swap',
})

const georgiaItalic  = localFont({
  src: "./fonts/georgiai.woff",
  variable: '--font-georgia_italic',          // Variable name for Tailwind
  display: 'swap',
})

const quotesCurved   = localFont({
  src: "./fonts/Victory.woff",
  variable: '--font-vic',          // Variable name for Tailwind
  display: 'swap',
})

const mB             = localFont({
  src: "./fonts/Montserrat-Bold.woff",
  variable: '--font-mb',          // Variable name for Tailwind
  display: 'swap',
})

export const metadata = {
  title: "Asset Elixir",
  description: "Financial Planner, Mumbai",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased
                  ${georgiaRegular.variable}
                  ${georgiaBold.variable}
                  ${notoSerifRegular.variable}
                  ${notoSerifBold.variable}
                  ${georgiaItalic.variable}
                  ${quotesCurved.variable}
                  ${mB.variable}
                `}
    >
      <body className="min-h-full flex flex-col">
        <AuthContextProvider>
          <BlogContextProvider>
            <AssetElixirHeader/>
            {children}
          </BlogContextProvider>
        </AuthContextProvider>
        </body>
    </html>
  );
}
