import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useCookies } from 'react-cookie';
import api from '../lib/axios';
import Navbar from '../components/generic/Navbar';
import useProducts from '../util/hooks/useProducts';
import MarketItems from '../components/Market/MarketItems';

const MarketPage = () => {
	const { products, isLoading } = useProducts();
	//this log will show you the shape of the data being returned, but should be removed before we ship
	console.log({ isLoading, products });

	const navigate = useNavigate();
	const [cookies, removeCookie, updateCookies] = useCookies([], {
		doNotUpdate: false,
	});

	useEffect(() => {
		const verifyCookie = async () => {
			if (!cookies.token) {
				navigate('/login');
			}
			console.log({ cookies });
			try {
				const { data } = await api.post('/', {}, { withCredentials: true });
				const { status } = data;
				console.log({ status });
				if (!status) {
					removeCookie('token'), navigate('/login');
				}
			} catch (err) {
				console.log({ err });
				navigate('/login');
			}
		};
		verifyCookie();
	}, [navigate, cookies, removeCookie]);

	return (
		<div className="min-h-screen">
			<Navbar />
			<div className="max-w-4xl mx-auto py-20">
				<h1 className="text-center text-3xl font-semibold text-secondary">
					Market
				</h1>
				<MarketItems />
				{/* Items Shop to go here */}
			</div>
		</div>
	);
};

export default MarketPage;
