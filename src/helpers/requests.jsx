import axios from "axios";
import { setLoggedStatus } from "../redux/features/authSlice";

const ApiEndpoint = `${import.meta.env.VITE_APP_API_URL}`;

export const getToken = () => {
    return localStorage.getItem("token");
};

export const requestWithAuth = async (method, url, action, api, body) => {
    try {
        const token = getToken();

        const response = await axios({
            method: method,
            url: `${ApiEndpoint}${url}${action != null ? action : ""}`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            data: body,
        });

        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 401 && api) {
            api.dispatch(setLoggedStatus(false));
            localStorage.removeItem("token");
            window.location.href = '/giris';
        }
        console.error(error);
        console.error("Errore girdi");
    }
};

export const requestWithAuthForm = async (method, url, action, api, body) => {
    try {
        const token = getToken();

        const response = await axios({
            method: method,
            url: `${ApiEndpoint}${url}${action != null ? action : ""}`,
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            data: body,
        });

        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 401 && api) {
            api.dispatch(setLoggedStatus(false));
            localStorage.removeItem("token");
            window.location.href = '/giris';
        }
        console.error(error);
        console.error("Errore girdi");
    }
};

export const requestWithoutAuthForm = async (method, url, action, api, body) => {
    try {
        const response = await axios({
            method: method,
            url: `${ApiEndpoint}${url}${action != null ? action : ""}`,
            data: body,
        });

        return response.data;
    } catch (error) {
        console.error(error);
        console.error("Errore girdi");
    }
};

export const requestWithoutAuth = async (method, url, action, api, body) => {
    try {
        const response = await axios({
            method: method,
            url: `${ApiEndpoint}${url}${action != null ? action : ""}`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: body,
        });

        return response.data;
    } catch (error) {
        console.error(error);
        console.error("Errore girdi");
    }
};
