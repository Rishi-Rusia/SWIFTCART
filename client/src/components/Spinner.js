import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Spinner({ path = "login" }) {
  const [count, setcount] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setcount((prevValue) => --prevValue);
    }, 1000);

    count === 0 &&
      navigate(`/${path}`, {
        state: location.pathname,
      });

    return () => clearInterval(interval);
  }, [count, navigate, location, path]);

  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column"
      style={{ height: "100vh" }}
    >
      <h1 className="Text-center"> redirecting you in {count} seconds </h1>
      <div
        className="spinner-border"
        role="status"
        style={{ padding: "25px", "margin-top": "10px" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
