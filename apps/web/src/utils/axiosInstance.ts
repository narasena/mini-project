import axios from "axios";

const apiInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,  
   headers: {
    'Content-Type': 'application/json'
  }
});

export default apiInstance