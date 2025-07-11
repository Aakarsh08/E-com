import React, { useContext, useEffect, useState } from 'react'
import { products } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProducts = ({category,subCategory}) => {

    const {product}=useContext(ShopContext);
    const [related,setRelated]=useState([]);

    useEffect(()=>{

        if(product.length>0){

            let productsCopy=product.slice();
            productsCopy=productsCopy.filter((item)=>category===item.category);
            productsCopy=productsCopy.filter((item)=>subCategory===item.subCategory);
    
            setRelated(productsCopy.slice(0,5));
        }


    },[product])

  return (
    <div className='my-24'>
      <div className='text-center text-3xl py-2'>
        <Title text1={'Related'} text2={'Products'} />
      </div>
      <div className='grid grid-cols-2 gap-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
        {related.map((item,index)=>(
            <ProductItem key={index} id={item._id} price={item.price} image={item.images[0]} />
        ))

        }

      </div>
    </div>
  )
}

export default RelatedProducts
