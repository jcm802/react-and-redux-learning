import React from 'react';

const Link = ({className, href, children}) => {
	const onClick = (event) => {
		// add cmd+click for opening a link in a new tab
		if(event.metaKey || event.ctrlKey) return;
		
		// do not do a full page reload to prevent lots of network request
		event.preventDefault();
		window.history.pushState({}, '', href);

		// tell the routes of navigational change
		const navEvent = new PopStateEvent('popstate');
		window.dispatchEvent(navEvent);
	};

	return (
		<a onClick={onClick} className={className} href={href}>
				{children}
		</a>
		)
};

export default Link;