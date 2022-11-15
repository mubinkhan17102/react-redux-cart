import React from 'react';
import LazyLoad from 'react-lazyload';
import {useDispatch} from 'react-redux'
import { add } from '../store/cartSlice';

const Product = ({product}) => {
  const {image, price,title} = product;
  const dispatch = useDispatch()
  return (
    <div className='card'>
      <LazyLoad height='600'>
        <img src={image} alt="Test"/>
      </LazyLoad>
      <h4>{title}</h4>
      <h3>Price: {price} </h3>
      <button type='button' className='btn' onClick={()=>dispatch(add(product))}>Add To Cart</button>
    </div>
  )
}

export default Product