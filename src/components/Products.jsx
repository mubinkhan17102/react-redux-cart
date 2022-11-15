import React, { useEffect, useState } from 'react'
import { BeatLoader } from 'react-spinners';
import Product from './Product';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [err, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(()=>{
      setIsLoading(true)
      fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(data =>{
        setProducts(data)
        setIsLoading(false)
      })
      .catch(e=>{
        setError(e.message)
        setIsLoading(false)
      })
  }, []);
  return (
    <>
      {err !== ""? err : ''}
      {isLoading === true ? <BeatLoader color="#36d7b7" />: ""}
      <div className='productsWrapper'>
        {products.map(product => <Product product={product}  key={product.id}/>)}
      </div>
    </>
  )
}

export default Products