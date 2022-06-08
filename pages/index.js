import Head from 'next/head'
import Image from 'next/image'

//import sanity 
import {client} from '../lib/client';

import {Product,FooterBanner,HeroBanner,Footer} from '../components'


export default function Home({products,BannerData}) {
  return (
    <div>
    {/* check if banner data exists and pass it as prop to HeroBanner component */}
    <HeroBanner heroBanner={BannerData.length && BannerData[0]}/>
    {console.log(BannerData)}
   
    <div className="products-heading">
      <h2>Best Seller Products</h2>
      <p>speaker There are many variations passages</p>
    </div>

    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>
   
      <FooterBanner footerBanner={BannerData && BannerData[0]}/>
    
    </div>
  )
}
export const getServerSideProps = async() =>{

  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const Bannerquery = '*[_type == "banner"]';
  const BannerData = await client.fetch(Bannerquery);

  return{
    props: {
      products,
      BannerData
    }
  }

}