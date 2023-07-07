import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  // useEffect(() => {}, [auth.user]);

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });

    localStorage.removeItem("auth");
    toast.success("logged out successfully");

    setTimeout(() => {
      navigate("/login");
    }, 500);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand" id="nav-brand" href="/">
            <i className="fa-brands fa-swift fa-lg"></i>
            Swiftcart
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" href="/">
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/category" className="nav-link" href="/">
                  CATEGORY
                </NavLink>
              </li>

              {!auth?.user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link" href="/">
                      REGISTER
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link" href="/">
                      LOGIN
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      style={{ border: "none" }}
                    >
                      {auth?.user?.name}
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                          className="dropdown-item"
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="dropdown-item"
                        >
                          Logout
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/" className="dropdown-item">
                          Home
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}

              <li className="nav-item">
                <NavLink to="/cart" className="nav-link" href="/">
                  <i className="fa-solid fa-cart-shopping"></i>(0)
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
