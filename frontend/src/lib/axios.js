import axios from 'axios';

// in production we cannot account for localhost so this needs to run dynamically
const BASE_URL =
	import.meta.env.MODE === 'development' ? `http://localhost:5001/` : '/';

const api = axios.create({
	baseURL: BASE_URL,
});

export default api;
