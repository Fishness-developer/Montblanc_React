import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import allProducts from '../../data/products.json';

const ProductDetail = () => {
	const {id} = useParams();
	const product = allProducts.find((p) => p.id === parseInt(id));
	const [counter, setCounter] = useState(1); // Начальное значение 1
	const [productsList, setProductsList] = useState([]);

	// Увеличение количества
	const incrementCounter = () => {
		setCounter((prevCounter) => prevCounter + 1);
	};

	// Уменьшение количества (не меньше 1)
	const decrementCounter = () => {
		setCounter((prevCounter) => Math.max(1, prevCounter - 1));
	};

	// Добавление продукта в корзину
	const addToCart = () => {
		setProductsList((prevList) => {



			// Если продукта нет, добавляем новый
const newList = [...prevList].filter((p) => p.id !== parseInt(id));
			return [...newList, {...product, number: counter}];
		});
		console.log('Updated productsList:', productsList); // Логирование после добавления
	};

	if (!product) {
		return <div>Товар не найден</div>;
	}
	console.log(counter);
	return (
		<div className="product-detail">
			<h3>{product.title}</h3>
			<img
				src={product.image}
				width="200"
				height="200"
				alt={product.title}
			/>
			<p className="price">
				<span>{product.price}.00</span> ₪
			</p>
			<p>{product.description}</p>
			Add more details or styling as needed
			<div className="amount">
				<button
					data-amount-decrease
					onClick={decrementCounter}
				>-
				</button>
				<input
					type="number"
					value={counter}
					className="amount-input"
				/>
				<button
					data-amount-increase
					onClick={incrementCounter}
				>+
				</button>
			</div>
			<button onClick={addToCart}>add to cart</button>
		</div>
	);
};

export default ProductDetail;