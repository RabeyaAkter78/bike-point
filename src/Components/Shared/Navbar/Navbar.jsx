import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const navItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/allProducts">All Products</Link></li>
        <li><Link to="/addProduct">Add Products</Link></li>
        <li><Link to="/aboutUs">About Us</Link></li>
        <li><Link to="/contactUs">Contact Us</Link></li>
        {user &&
            <li><Link to="/dashboard">DASHBOARD <span className="text-red-400"></span> </Link></li>
        }
    </>


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <div className="navbar bg-orange-500 text-white font-semibold uppercase z-10 fixed ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl uppercase">Bike Point</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end md:navbar-end text-white mt-4">
                    <div className="tooltip" data-tip={user?.displayName}>
                        {user && <img className="rounded-full mr-4 bg-blue-200" style={{ height: '50px' }} src={user?.photoURL} alt="user img" />
                        }
                    </div>

                    {user ?
                        <button onClick={handleLogOut} className="btn">LogOut</button>
                        :
                        <Link to='/login' className="btn">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;