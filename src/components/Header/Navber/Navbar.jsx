import { NavLink } from "react-router-dom";

const Navbar = () => {
    const links = (
      <>
        <li className="flex space-x-7 justify-between items-center">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/login"}>Login</NavLink>
          <NavLink to={"/registration"}>Registration</NavLink>
        </li>
      </>
    );
    return (
      <div className="navbar flex justify-between items-center bg-base-100">
        <div className="flex">
          <a className="btn btn-ghost normal-case text-xl">Page Login</a>
        </div>
        <div>
            <ul className="">
                {links}
            </ul>
        </div>
      </div>
    );
};

export default Navbar;