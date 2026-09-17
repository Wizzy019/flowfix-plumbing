import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { ScrollToTop } from "../components/common/ScrollToTop";
import FloatingContactButton from "../components/common/FloatingContactButton";

export default function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
        <FloatingContactButton />
      </main>
      <Footer />
    </>
  );
}
