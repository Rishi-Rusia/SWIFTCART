import React from "react";
import Layout from "../../components/Layout/Layout";

import toast from "react-hot-toast";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [answer, setAnswer] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`/api/v1/auth/forgot-password`, {
        email,
        answer,
        newPassword,
      });

      if (res && res.data.success) {
        console.log(res.data.success);
        toast.success(res.data.message);

        navigate("/login");
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
                      RESET PASSWORD
                    </h3>
                    <form className="px-md-2" onSubmit={handleSubmit}>
                      <div className="row"></div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example1q">
                          Email
                        </label>
                        <input
                          type="email"
                          id="form3Example1q"
                          className="form-control"
                          required
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                          value={email}
                          placeholder="Enter your email"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example1q">
                          What is your favorite sport?
                        </label>
                        <input
                          type="text"
                          id="form3Example1q"
                          className="form-control"
                          required
                          onChange={(e) => {
                            setAnswer(e.target.value);
                          }}
                          value={answer}
                          placeholder="Enter your answer"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example1q">
                          New Password
                        </label>
                        <input
                          type="password"
                          id="form3Example1q"
                          className="form-control"
                          required
                          onChange={(e) => {
                            setNewPassword(e.target.value);
                          }}
                          value={newPassword}
                          placeholder="Enter new password"
                        />
                      </div>

                      <div className="d-flex">
                        <button
                          type="submit"
                          className="btn btn-dark btn-lg mb-1"
                          style={{ "margin-right": "10px" }}
                        >
                          Submit
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
