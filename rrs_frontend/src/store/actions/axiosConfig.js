
import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Assuming you have set VITE_API_URL in your .env file
  timeout: 10000, // Adjust timeout as needed
});

export default instance;
