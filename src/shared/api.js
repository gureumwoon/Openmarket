import axios from "axios";

const api = axios.create({
    baseURL: "https://openmarket.weniv.co.kr/",
    headers: {
        'Content-type': 'application/json;charset=UTF-8',
        accept: 'application/json,',
    },
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("jwtToken");

    config.headers.common["Authorization"] = `Bearer ${token}`;
});

export const apis = {
    signUp: (data) => api.post("accounts/signup/", data)
}

