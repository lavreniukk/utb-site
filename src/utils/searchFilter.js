const searchFilter = (products, searchParameter) => {
    const formatedSearchParam = searchParameter.toLowerCase().replace(/\s/g, '');
    return products.filter(
        (product) =>
            product.name
                .toLowerCase()
                .replace(/\s/g, '')
                .includes(formatedSearchParam) ||
            product.article
                .toLowerCase()
                .replace(/\s/g, '')
                .includes(formatedSearchParam),
    );
}

export default searchFilter;

		