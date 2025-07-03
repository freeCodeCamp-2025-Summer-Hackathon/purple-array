import axios from 'axios';

const PORT = import.meta.env.PORT;
const BASE_URL =
	import.meta.env.MODE === 'development'
		? `http://localhost:${PORT}/api`
		: '/api';

const api = axios.create({
	baseURL: BASE_URL,
});

export default api;
