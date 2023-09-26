import Axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_PRODUCTION_BASE_DOMAIN  

const client = Axios.create({
  baseURL: baseUrl,
  headers: {
    accept: "application/json",
  },
});

export default client;
