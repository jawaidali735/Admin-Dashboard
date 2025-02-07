"use client";

import { ClerkProvider } from "@clerk/nextjs";
 // 🔥 Import the redirect component
import "./globals.css";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "#000000",
                color: "#FFFFFF",
              },
            }}
          />
        </body>
      </html>
    </ClerkProvider>
  );
}
