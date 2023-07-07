import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`/api/v1/auth/register`, {
        name,
        email,
        password,
        phone,
        address,
        answer,
      });

      if (res && res.data.success) {
        console.log(res.data.success);
        toast.success(res.data.message);

        setTimeout(() => {
          navigate("/login");
        }, 2000);
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
        <section className="h-40 h-custom">
          <div className="container py-5 h-40">
            <div className="row d-flex justify-content-center align-items-center h-50">
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
                  <div className="card-body p-1 p-md-2">
                    <h3 className="mb-2 pb-2 pb-md-0 mb-md-3  px-md-2">
                      R E G I S T E R
                    </h3>
                    <form className="px-md-1" onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="form-outline mb-2">
                          <input
                            type="text"
                            // id="form3Example1q"
                            className="form-control"
                            value={name}
                            onChange={(e) => {
                              setName(e.target.value);
                            }}
                            placeholder="enter your name"
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1q"
                          >
                            Name
                          </label>
                        </div>
                      </div>

                      <div className="form-outline mb-1">
                        <input
                          type="email"
                          //   id="form3Example1q"
                          className="form-control"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                          placeholder="enter email"
                        />
                        <label className="form-label" htmlFor="form3Example1q">
                          Email
                        </label>
                      </div>

                      <div className="form-outline mb-1">
                        <input
                          type="password"
                          //   id="form3Example1q"
                          className="form-control"
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                          placeholder="enter password"
                        />
                        <label className="form-label" htmlFor="form3Example1q">
                          Password
                        </label>
                      </div>

                      <div className="form-outline mb-1">
                        <input
                          type="text"
                          //   id="form3Example1q"
                          className="form-control"
                          value={phone}
                          onChange={(e) => {
                            setPhone(e.target.value);
                          }}
                          placeholder="enter phone number"
                        />
                        <label className="form-label" htmlFor="form3Example1q">
                          Phone
                        </label>
                      </div>

                      <div className="form-outline mb-1">
                        <input
                          type="text"
                          //   id="form3Example1q"
                          className="form-control"
                          value={address}
                          onChange={(e) => {
                            setAddress(e.target.value);
                          }}
                          placeholder="enter address"
                        />
                        <label className="form-label" htmlFor="form3Example1q">
                          Address
                        </label>
                      </div>
                      <div className="form-outline mb-1">
                        <input
                          type="text"
                          //   id="form3Example1q"
                          className="form-control"
                          value={answer}
                          onChange={(e) => {
                            setAnswer(e.target.value);
                          }}
                          placeholder="what is your favorite sport?"
                        />
                        <label className="form-label" htmlFor="form3Example1q">
                          Answer
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-dark btn-lg mb-1"
                      >
                        Submit
                      </button>
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
