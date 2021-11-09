import { useEffect, useState } from 'react';

const Route = ({ path, children }) => {

	// using state to get the route to rerender itself
	const [currentPath, setCurrentPath] = useState(window.location.pathname);

	// listen for navEvent, so routes know it has changed
	useEffect(() => {
		const onLocationChange = () => {
			setCurrentPath(window.location.pathname);
		};
		window.addEventListener('popstate', onLocationChange);

		return () => {
			window.removeEventListener('popstate', onLocationChange);
		}
	}, []);

	return currentPath === path
	? children
	: null;
};

export default Route;