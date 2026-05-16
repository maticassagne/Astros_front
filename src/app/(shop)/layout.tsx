import React from "react";
import Navbar from "@/components/Navbar/navbar";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      {/* 
        Aquí renderizamos el Navbar que será visible 
        en la landing y en todo el e-commerce público 
      */}
      <Navbar />
      <main>
        {children}
      </main>
    </div>
  );
}
