
import React from 'react';
import { useParams } from 'react-router-dom';
import allProducts from '../../data/products.json';

const ProductDetail = () => {
	const { id } = useParams();
	const product = allProducts.find((p) => p.id === parseInt(id));

	if (!product) {
		return <div>Product not found</div>;
	}

	return (
		<div className="product-detail">
			<h3>{product.description}</h3>
			<img
				src={product.image}
				width="200"
				height="200"
				alt={product.description}
			/>
			<p className="price">
				<span>{product.price}.00</span> ₪
			</p>
			<p>{product.description}</p>
			{/* Add more details or styling as needed */}
		</div>
	);
};

export default ProductDetail;