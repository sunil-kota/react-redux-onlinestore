import React, { useEffect,useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../../../src/redux/actions';
import { setProducts } from '../../../../src/redux/actions';
import './index.css';



const Products = ({ selectedCategory }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const fetchProductsByCategory = useCallback(async (category) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      dispatch(setProducts(data));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [dispatch]);
  
  useEffect(() => {
    if (selectedCategory) {
      fetchProductsByCategory(selectedCategory);
    } else {
      const fetchData = async () => {
        try {
          const response = await fetch('https://fakestoreapi.com/products');
          if (!response.ok) {
            throw new Error('Failed to fetch products');
          }
          const data = await response.json();
          dispatch(setProducts(data));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }
  }, [selectedCategory, dispatch, fetchProductsByCategory]);
  

  const products = useSelector((state) => state.products.products);
  
  return (
    <div className='ProductContainer'>
      {products.map((product) => (
        <div key={product.id} className='Product'>
          <img src={product.image} alt={product.description}/>
          <h6>{product.title}</h6>
          <h3>Price: ${product.price}</h3>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
