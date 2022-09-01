import axios from "axios";

const api = axios.create({
    baseURL: "https://openmarket.weniv.co.kr/",
    headers: {
        'Content-type': 'application/json;charset=UTF-8',
        accept: 'application/json,',
    },
});

api.interceptors.request.use((config) => {
    const jwtToken = localStorage.getItem("token");
    if (jwtToken !== undefined) {
        config.headers.common["Authorization"] = `Bearer ${jwtToken}`;
    }
    // config.headers.common["Authorization"] = `Bearer ${token}`;
    return config;
});

export const apis = {
    // user
    signUp: (data) => api.post("accounts/signup/", data),
    signIn: (data) => api.post("accounts/login/", data),
    signOut: (data) => api.post("accounts/logout/", data),
    // product
    getProduct: () => api.get("products/"),
    getOneProduct: (id) => api.get(`products/${id}`),
}

