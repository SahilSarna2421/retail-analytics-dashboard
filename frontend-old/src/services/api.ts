import axios from "axios";
import type { ApiResponse } from "../types/dashboard";

const API = axios.create({
    baseURL: "http://localhost:5000/api",
});

export const getDashboard = async (): Promise<ApiResponse> => {
    const response = await API.get("/dashboard");
    return response.data;
};