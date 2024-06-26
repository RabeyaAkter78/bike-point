import { Link, Outlet } from "react-router-dom";

const DashboardLayouts = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-warning drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-64 min-h-full  bg-orange-300 ">
                    {/* Sidebar content here */}
                    <button className="btn font-bold"><Link to='/dashBoard/manageProducts'> Manage Products</Link></button>
                </ul>

            </div>
        </div>
    );
};

export default DashboardLayouts;