import React from "react";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();

  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`/api/v1/auth/login`, {
        email,
        password,
      });

      if (res && res.data.success) {
        console.log(res.data.success);
        toast.success(res.data.message);

        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });

        localStorage.setItem("auth", JSON.stringify(res.data));

        setTimeout(() => {
          navigate(location.state || "/");
        }, 500);
      } else {
        toast.error(res.data.message);
      }

      console.log(res);
    } catch (error) {
      toast.error("something went wrong");
      console.log(error);
    }

    // console.log(name, email, password, address, phone);
  };

  return (
    <Layout>
      <div className="register">
        <section className="h-100 h-custom">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-8 col-xl-6">
                <div
                  className="card rounded-3"
                  style={{
                    border: "2px solid black",
                    backgroundImage:
                      "url(https://images.pexels.com/photos/3616764/pexels-photo-3616764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
                  }}
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"
                    className="w-100"
                    style={{
                      borderTopLeftRadius: ".3rem",
                      borderTopRightRadius: ".3rem",
                    }}
                    alt=""
                  />
                  <div className="card-body p-4 p-md-5">
                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                      L O G I N
                    </h3>
                    <form className="px-md-2" onSubmit={handleSubmit}>
                      <div className="row"></div>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form3Example1q"
                          className="form-control"
                          required
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                          value={email}
                        />
                        <label className="form-label" htmlFor="form3Example1q">
                          Email
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example1q"
                          className="form-control"
                          required
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                          value={password}
                        />
                        <label className="form-label" htmlFor="form3Example1q">
                          Password
                        </label>
                      </div>

                      <div className="d-flex">
                        <button
                          type="submit"
                          className="btn btn-dark btn-lg mb-1"
                          style={{ "margin-right": "10px" }}
                        >
                          Login
                        </button>
                        <button
                          type="button"
                          className="btn btn-dark btn-lg mb-1"
                          onClick={() => {
                            navigate("/forgot-password");
                          }}
                        >
                          Forgot Password
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
