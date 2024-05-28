import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const axiosSecure = axios.create({
    baseURL: 'https://bike-point-server.vercel.app/',
});

const UseAxiosSecure = () => {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            return config;
        });

        axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    await logout(); 
                    navigate('/login'); 
                }
                return Promise.reject(error);
            }
        );
    }, [logout, navigate]);

    return [axiosSecure];
};

export default UseAxiosSecure;
