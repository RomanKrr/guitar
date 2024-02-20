import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContex'
import Item from '../Components/Item/Item'
import FilterSort from '../Components/FilterSort/FilterSort'

const ShopCategory = (props) => {
  const {all_products} = useContext(ShopContext);
  const pageTitle = getPageTitleBasedOnCategory(props.category);
  const filteredProducts = all_products.filter(item => item.category === props.category);

  return (
    <div className='shop-category'>
      {/* <div style={{ height: '100px' }}></div> */}
      {/* <FilterSide pageTitle={pageTitle} /> */}
      <FilterSort products={filteredProducts} pageTitle={pageTitle} />
    </div>
  )
}

export default ShopCategory
const getPageTitleBasedOnCategory = (category) => {    
  return category.charAt(0).toUpperCase() + category.slice(1);
}
