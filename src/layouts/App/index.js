import { Outlet } from "react-router-dom";
import {Navbar, Footer} from "../";

export default function App() {
  return (
    <>
      <Navbar />
        <div className="container">
          <Outlet/>
        </div>
      <Footer />
    </>
  );
}
