import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

//distructure items from the products object/component

const Product = ({product: {image,name,slug,price} }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='product-card'>
         {/* check wether image exists and display the first one} */}
          <img
          src={urlFor(image && image[0])}
          width={250}
          height={250}
          alt={name}
          className="product-image"
          />
           <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product