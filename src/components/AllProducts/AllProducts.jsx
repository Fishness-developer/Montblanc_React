import React, {useState} from 'react';
import allProducts from "../../data/products.json";
import Product from "../Product/Product.jsx";

const AllProducts = () => {

	return (
		<ul className="section_01__promotions">
			{allProducts.map((item) => (
				<Product	key={item.id}	product={item} />
			))}
		</ul>
	);
};

export default AllProducts;
