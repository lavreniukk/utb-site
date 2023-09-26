const setMetaDescription = (description) => {
	const metaTag = document.querySelector('meta[name="description"]');
	if (metaTag) {
		metaTag.setAttribute('content', description);
	} else {
		const newMetaTag = document.createElement('meta');
		newMetaTag.setAttribute('name', 'description');
		newMetaTag.setAttribute('content', description);
		document.head.appendChild(newMetaTag);
	}
};

export default setMetaDescription;
