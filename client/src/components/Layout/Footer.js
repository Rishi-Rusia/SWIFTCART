import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <h4 className="text-center"> All rights reserved &copy; Rishi Rusia</h4>
      <p className="text-center mt-3">
        <Link className="mx-2" to="/contact">
          Contact
        </Link>
        <Link className="mx-2" to="/about">
          About
        </Link>
        <Link className="mx-2" to="/policy">
          Policy
        </Link>
      </p>
    </div>
  );
}
