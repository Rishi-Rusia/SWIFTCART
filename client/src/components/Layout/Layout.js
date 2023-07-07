import React from "react";
import Header from "./Header";
import Footer from "./Footer";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import { Toaster } from "react-hot-toast";

export default function Layout(props) {
  return (
    <div>
      <Header></Header>

      <div className="main" style={{ minHeight: "80vh" }}>
        <Toaster></Toaster>
        {props.children}
      </div>
      <Footer></Footer>
    </div>
  );
}
