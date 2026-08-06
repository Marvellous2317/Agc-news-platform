import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "../../shared/components/Footer";

export default function PageLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="container grow mx-auto px-4">
        <Outlet className="w-full"/>
      </main>
      <Footer />
    </div>
  );
}
