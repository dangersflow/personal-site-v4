"use client";

import { Inter } from "next/font/google";
import { useReducer } from "react";
import AppContext from "../../context/AppContext";
import AppContextReducer from "../../reducers/AppContextReducer";
import InitialAppState from "../../utils/InitialAppState";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(AppContextReducer, InitialAppState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </AppContext.Provider>
  );
}
