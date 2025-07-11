import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';


const LatestCollection = () => {
    const { product } = useContext(ShopContext);  
    const [latestProducts,  setLatestProducts] = useState([]);
    
    useEffect(()=>{
      setLatestProducts(product.slice(0,2));
    },[product])
  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'Latest'} text2={'Collection'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo itaque alias tempora porro fugiat sed atque id ea rem deleniti maxime animi pariatur magnam suscipit, cumque reiciendis libero! Dolorum, quos?</p>
        </div>


        {/* Rendering Products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
          {
            latestProducts.map((item,index)=>(
              <ProductItem key={index} id={item._id} image={item.images[0]} name={item.name} price={item.price}/>
            ))
          }
          
        </div>
    </div>
  )
}

export default LatestCollection
