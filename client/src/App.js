import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import Policy from "./pages/Policy";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import axios from "axios";
import { useEffect } from "react";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Routes/Private";
import ForgotPassword from "./pages/auth/ForgotPassword";
import AdminRoute from "./components/Routes/AdminRoute";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CreateProduct from "./pages/admin/CreateProduct";
import CreateCategory from "./pages/admin/CreateCategory";
import Users from "./pages/admin/Users";
import Profile from "./pages/user/Profile";
import Orders from "./pages/user/Orders";
// import toast from "react-hot-toast";

function App() {
  const firstcall = async () => {
    // toast.success("successful testing");
    try {
      const result = await axios.post("/test", {
        hello: "hello",
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    firstcall();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/dashboard" element={<PrivateRoute></PrivateRoute>}>
          <Route path="user" element={<Dashboard></Dashboard>}></Route>
          <Route path="user/profile" element={<Profile></Profile>}></Route>
          <Route path="user/orders" element={<Orders></Orders>}></Route>
        </Route>
        <Route path="/dashboard" element={<AdminRoute></AdminRoute>}>
          <Route
            path="admin"
            element={<AdminDashboard></AdminDashboard>}
          ></Route>
          <Route
            path="admin/create-product"
            element={<CreateProduct></CreateProduct>}
          ></Route>
          <Route
            path="admin/create-Category"
            element={<CreateCategory></CreateCategory>}
          ></Route>
          <Route path="admin/users" element={<Users></Users>}></Route>
        </Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        <Route path="/policy" element={<Policy></Policy>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        {/* <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route> */}
        <Route
          path="forgot-password"
          element={<ForgotPassword></ForgotPassword>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
