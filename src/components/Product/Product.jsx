import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
	return (
		<li
			className="section_01__promotions-item"
			data-product-name={props.product.description}
		>
			<div className="item-image">
				<img
					src={props.product.image}
					width="137"
					height="156"
					alt={props.product.description}
				/>
			</div>
			<p className="price">
				<span className="extra">{props.product.price.toFixed(2)}</span> ₪
			</p>
			{/*<p className="offer">58.00₪<span className="percent">-23%</span></p>*/}
			<p className="item-description">{props.product.description}</p>

			<Link
				to={`/product/${props.product.id}`}
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