import React from 'react';
import allProducts from "../../data/products.json";
import Product from "../../components/Product/Product.jsx";
import {useParams} from "react-router-dom";
import ProductDetail from "../../components/ProductDetail/ProductDetail.jsx";


const ProductDetailPage = () => {
	return(
		<section className="section_011">
			<div className="section_031__info ">
				<ProductDetail/>
			</div>

			</section>
		)

};

export default ProductDetailPage;
