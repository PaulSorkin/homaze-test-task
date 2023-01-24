import axios from "axios";

const instance = axios.create({
    baseURL: "https://homaze-test-api.onrender.com/projects",
});

export default instance;