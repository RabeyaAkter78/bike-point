import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";
import DashboardLayouts from "../Layouts/DashBoard/DashboardLayouts";
import DashBoard from "../Pages/DashBoard/DashBoard";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AboutUs from "../Pages/AboutUs/AboutUs";
import AllProduct from "../Pages/AllProduct/AllProduct";
import AddProduct from "../Pages/AddProduct/AddProduct";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AdminRoute from "./AdminRoute";
import ManageProducts from "../Layouts/DashBoard/ManageProducts";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "signUp",
                element: <SignUp></SignUp>
            },
            {
                path: "aboutUs",
                element: <AboutUs></AboutUs>
            },
            {
                path: "allProducts",
                element: <AllProduct></AllProduct>
            },
            {
                path: "addProduct",
                element: <PrivateRoute> <AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: "contactUs",
                element: <ContactUs></ContactUs>
            },
        ]
    },
    {
        path: "dashboard",
        element: <DashboardLayouts></DashboardLayouts>,
        children: [
            {
                path: "",
                element: <AdminRoute><DashBoard></DashBoard></AdminRoute>
            },
            {
                path: "manageProducts",
                element: <AdminRoute><ManageProducts></ManageProducts></AdminRoute>
            },

        ]
    }
]);