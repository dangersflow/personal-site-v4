"use client";
import "./globals.css";
import AppContext from "../../context/AppContext";
import AppContextReducer from "../../reducers/AppContextReducer";
import InitialAppState from "../../utils/InitialAppState";
import { Inter } from "next/font/google";
import { Suspense, useReducer } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(AppContextReducer, InitialAppState);

  return (
    <ParallaxProvider>
      <AppContext.Provider value={{ state, dispatch }}>
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>
      </AppContext.Provider>
    </ParallaxProvider>
  );
}
