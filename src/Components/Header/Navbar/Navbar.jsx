import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";


const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>

              <li>
                <a>Recipes</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Search</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl">Recipe Calories</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>

            <li>
              <a>Recipes</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Search</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="relative max-w-40 md:max-w-64 flex items-center">
          <input
            type="text"
            placeholder=" Search"
            className="input input-bordered bg-[#150B2B0D] w-full max-w-64 rounded-full pl-10"
          />
          <IoIosSearch className="absolute top-1/2 left-3 transform -translate-y-1/2  text-3xl" />
          </div>
          <CgProfile className="text-5xl ml-2 bg-[#0BE58A] rounded-full p-2" />

        </div>
      </div>
    </div>
  );
};

export default Navbar;
