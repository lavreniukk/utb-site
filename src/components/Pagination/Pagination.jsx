import React from 'react';
import './pagination.css';

function Pagination({
	productsOnPage,
	totalProductsCount,
	currentPage,
	handlePaginationClick,
}) {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalProductsCount / productsOnPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<nav className="pagination__container">
			<ul className="pagination">
				{pageNumbers.map((number, index) => {
					if (
						index === 0 ||
						index === pageNumbers.length - 1 ||
						Math.abs(index + 1 - currentPage) <= 1
					) {
						return (
							<li key={number} className="page-item">
								<button
									className="page-link"
									onClick={() => handlePaginationClick(number)}
								>
									{number}
								</button>
							</li>
						);
					} else if (Math.abs(index + 1 - currentPage) === 2) {
						return (
							<li key={number} className="page-item">
								<button className="page-link">...</button>
							</li>
						);
					}
					return null;
				})}
			</ul>
		</nav>
	);
}

export default Pagination;
