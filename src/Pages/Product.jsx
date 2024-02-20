import React, { useContext } from 'react'
import './CSS/Product.css'
import { ShopContext } from '../Context/ShopContex'
import { useParams } from 'react-router-dom';
import DisplayProduct from '../Components/DisplayProduct/DisplayProduct';



const Product = () => {
  const {all_products} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_products.find((e) => e.id === Number(productId)); 
  return (
    <div>
        <DisplayProduct product={product}/>
    </div>
  )
}

export default Product;

