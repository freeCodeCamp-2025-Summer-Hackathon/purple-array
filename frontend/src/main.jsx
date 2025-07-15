import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router';
import { Toaster } from 'react-hot-toast';
import allToasterOptions from './util/helper/formatToast.js';
import {
	MessageCircleHeart,
	CloudCheck,
	CloudAlert,
	Bubbles,
} from 'lucide-react';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<App />
			<Toaster
				position={allToasterOptions.position}
				toastOptions={{
					duration: 2000,
					style: allToasterOptions.styles.style,
					icon: <MessageCircleHeart />,

					success: {
						style: allToasterOptions.styles.success.style,
						icon: <CloudCheck />,
					},
					error: {
						style: allToasterOptions.styles.error.style,
						icon: <CloudAlert />,
					},
					loading: {
						style: allToasterOptions.styles.loading.style,
						icon: <Bubbles />,
					},
				}}
				containerStyle={allToasterOptions.containerStyle}
			/>
		</BrowserRouter>
	</StrictMode>
);
