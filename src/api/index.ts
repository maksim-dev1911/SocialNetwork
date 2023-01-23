import axios from "axios";

export const api = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {"API-KEY": "5ee156cc-d981-4915-ba4e-7b635a81b47e"}
})