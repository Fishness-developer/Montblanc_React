import React from 'react';
import allProducts from "../../data/products.json";
import Product from "../../components/Product/Product.jsx";
import {useParams} from "react-router-dom";
import ProductDetail from "../../components/ProductDetail/ProductDetail.jsx";


const ProductDetailPage = () => {
	return(
		<section className="section_01">
			<div className="section_03__info ">
				<ProductDetail/>
			</div>

			</section>
		)

};

export default ProductDetailPage;
