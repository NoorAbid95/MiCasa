import logo from "../assets/shared/mi-casa_logo.svg";
import HomePage from "../pages/HomePage";
import useAuthStore from "../store/useAuthStore";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isLoggedIn } = useAuthStore();
  const publicLinks = [
    { label: "Sign Up", path: "signup" },
    { label: "Login", path: "login" },
  ];
  const loggedInLinks = [
    { label: "Shopping List", path: "shopping-list" },
    { label: "Calendar", path: "calendar" },
    { label: "Chores", path: "chores" },
    { label: "Messages", path: "messages" },
    { label: "My Settings", path: "settings" },
  ];
  return (
    <nav className="absolute top-0 left-0 z-50 bg-transparent w-full p-4">
      <div className="flex">
        <Link to={"/"}>
          <img src={logo} alt="mi casa logo" className="ml-10 w-10 h-10" />
        </Link>

        <ul className="flex items-center justify-end space-x-6 w-full pr-10">
          {(isLoggedIn ? loggedInLinks : publicLinks).map(({ label, path }) => (
            <li>
              <Link to={`/${path}`}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
