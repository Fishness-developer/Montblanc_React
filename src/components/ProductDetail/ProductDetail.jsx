import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import allProducts from '../../data/products.json';

const ProductDetail = () => {
	const { id } = useParams();
	const [productsList, setProductsList] = useState([]);
  const product = allProducts.find((p) => p.id === parseInt(id));
  const [counter, setCounter] = useState(0); // Начальное значение 1
  

  useEffect(() => {
    console.log("Updated productsList:", productsList);
    console.log(counter);
  }, [productsList, counter]);

  // Увеличение количества
  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  // Уменьшение количества (не меньше 1)
  const decrementCounter = () => {
    setCounter((prevCounter) => Math.max(0, prevCounter - 1));
  };

  const addToCart = () => {
    setProductsList((prevList) => {
      const newList = prevList.filter((p) => p.id !== product.id);
      return [...newList, { ...product, number: counter }];
    });
  };

  if (!product) {
    return <div>Товар не найден</div>;
  }
  console.log(counter);
  return (
    <div className="product-detail">
      <h3>{product.title}</h3>
      <img src={product.image} width="200" height="200" alt={product.title} />
      <p className="price">
        <span>{product.price}.00</span> ₪
      </p>
      <p>{product.description}</p>
      Add more details or styling as needed
      <div className="amount">
        <button data-amount-decrease onClick={decrementCounter}>
          -
        </button>
        {/* <input
					type="number"
					value={counter}
					className="amount-input"
				/> */}
        <div className="amount-input">{counter}</div>
        <button data-amount-increase onClick={incrementCounter}>
          +
        </button>
      </div>
      <button onClick={() => addToCart()}>add to cart</button>
    </div>
  );
};

export default ProductDetail;