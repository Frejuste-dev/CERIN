import { Outlet } from "react-router";
import { Suspense } from "react";
import { Header } from "./components/shared/Header";
import { Footer } from "./components/shared/Footer";

export function Root() {
  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "'Inter', sans-serif", background: "#FFFFFF" }}>
      <Header />
      <main className="flex-1">
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-[#7AC943] border-t-transparent rounded-full animate-spin" />
          </div>
        }>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
