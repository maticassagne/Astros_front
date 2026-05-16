import React from "react";
import Sidebar from "@/components/Sidebar/sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-[#c9d0e1] text-slate-800 font-sans">
      <Sidebar />
      {children}
    </div>
  );
}
