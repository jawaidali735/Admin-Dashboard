"use client";

import { ClerkProvider } from "@clerk/nextjs";
import AdminLayout from "./components/AdminLayout";



export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <AdminChecking>{children}</AdminChecking>
    </ClerkProvider>
  );
}

function AdminChecking({ children }: { children: React.ReactNode }) {


  // ✅ Yahan return sahi tarike se wrap hona chahiye
  return <AdminLayout>{children}</AdminLayout>;
}
