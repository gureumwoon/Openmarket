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
        config.headers.common["authorization"] = jwtToken ? `JWT ${jwtToken}` : "";
    }
    return config;
});


export const apis = {
    // user
    signUp: (data) => api.post("accounts/signup/", data),
    dupcheck: (data) => api.post("accounts/signup/valid/", data),
    signIn: (data) => api.post("accounts/login/", data),
    signOut: (data) => api.post("accounts/logout/", data),
    // product
    getProduct: () => api.get("products/"),
    getOneProduct: (id) => api.get(`products/${id}`),
    //cart
    addCart: (data) => api.post("cart/", data),
    getCart: () => api.get("cart/"),
    getItemCart: (id) => api.get(`cart/${id}`),
    modifyQuantity: (id, data) => api.put(`cart/${id}`, data),
}

