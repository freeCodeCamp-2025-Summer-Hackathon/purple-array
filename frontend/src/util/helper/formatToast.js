const allToasterOptions = {
	position: 'top-center',
	styles: {
		duration: 4000,
		removeDelay: 500,
		style: {
			border: '1px solid #000000',
			background: '#1affff',
			color: '#3d4343',
		},

		success: {
			style: {
				border: '1px solid #004d00',
				background: '#1aff1a',
				color: '#004d00',
			},
		},
		error: {
			style: {
				border: '1px solid #800000',
				background: '#e60000',
				color: '#fff',
			},
		},
		loading: {
			style: {
				border: '1px solid #7a4f05',
				background: '#f59e0b',
				color: '#fff',
			},
		},
	},
	containerStyle: { top: 100 },
};

export default allToasterOptions;
