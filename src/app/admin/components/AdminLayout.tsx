"use client";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useEffect, useRef, useState, useCallback } from "react";
import { usePathname } from "next/navigation";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  // ✅ Fix: useCallback to prevent function recreation
  const toggleSidebar = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  // ✅ Fix: Close sidebar on page change (for mobile only)
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutsideEvent(event: MouseEvent) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutsideEvent);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideEvent);
    };
  }, []);

  return (
    <main className="relative flex">
      {/* Sidebar for Desktop */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Sidebar for Mobile */}
      <div
        ref={sidebarRef}
        className={`fixed md:hidden ease-in-out transition-all duration-400 ${
          isOpen ? "translate-x-0" : "-translate-x-[260px]"
        }`}
      >
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <section className="flex-1 flex flex-col min-h-screen">
        <Header toggleSidebar={toggleSidebar} />
        <section className="flex-1 bg-[#eff3f4]">{children}</section>
      </section>
    </main>
  );
}
