import React from 'react';

const AnimatePulseLoader = () => {
	return (
		<>
			<div className="flex justify-center items-center h-64">
				<div className="card w-full max-w-3xl bg-base-200 p-10 shadow-md animate-pulse">
					<div className="h-6 bg-base-300 rounded w-1/3 mb-4"></div>
					<div className="h-4 bg-base-300 rounded w-2/3 mb-2"></div>
					<div className="h-4 bg-base-300 rounded w-full mb-1"></div>
					<div className="h-4 bg-base-300 rounded w-5/6"></div>
				</div>
			</div>
		</>
	);
};

export default AnimatePulseLoader;
