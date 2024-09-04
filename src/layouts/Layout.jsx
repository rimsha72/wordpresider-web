import { Outlet } from "react-router-dom";
import Navbar from "./partials/navbar";
import Footer from "./partials/footer";
// import Header from "./partials/header";

export default function Layout() {
  return (
    <div className="lg:h-screen h-full">
      <Navbar />
      <div className="relative overflow-y-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
