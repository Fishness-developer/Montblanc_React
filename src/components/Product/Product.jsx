import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {

	return (
		<li
			className="section_01__promotions-item"
			data-product-name={product.title}
		>
			<div className="item-image">
				<img
					src={product.image}
					width="137"
					height="156"
					alt={product.title}
				/>
			</div>
			<p className="price">
				<span className="extra">{product.price.toFixed(2)}</span> ₪
			</p>
			{/*<p className="offer">58.00₪<span className="percent">-23%</span></p>*/}
			<p className="item-description">{product.title}</p>

			<Link
				to={`/product/${product.id}`}
				className="section_01__promotions-item-button button"
				data-cart
			>
				view product
			</Link>

		</li>
	)
		;
};

export default Product;