import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router';
import { Toaster } from 'react-hot-toast';
import { MessageCircleHeart, CloudCheck, CloudAlert, Bubbles } from 'lucide-react';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<App />
			<Toaster
                position='top-center'
                toastOptions={{
                    duration: 4000,
                    removeDelay: 500,
                    style: {
                        border: '1px solid #000000',
                        background: '#1affff',
                        color: '#3d4343'
                    },
                    icon: <MessageCircleHeart />,
                    
                    success: {
                        style: {
                            border: '1px solid #004d00',
                            background: '#1aff1a',
                            color: '#004d00',
                        },
                        icon: <CloudCheck />,
                    },
                    error: {
                        style: {
                            border: '1px solid #800000',
                            background: '#e60000',
                            color: '#fff'
                        },
                        icon: <CloudAlert />
                    },
                    loading: {
                        style: {
                            border: '1px solid #7a4f05',
                            background: '#f59e0b',
                            color: '#fff'
                        },
                        icon: <Bubbles />
                    }
                }}
            />
		</BrowserRouter>
	</StrictMode>
);
