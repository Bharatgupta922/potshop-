import axios from "axios";

const instance = axios.create({
    //api base url
    baseURL:'http://localhost:5001/potshop-da2d9/us-central1/api'
});

export default instance;
