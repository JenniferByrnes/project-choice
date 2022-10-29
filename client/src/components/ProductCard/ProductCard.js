import './ProductCard.css'
import mug from '../../assets/products/coffee-mug.png'


export default function ProductCard({product}) {
    return (
        <div className='w-60 product-image pt-6 shadow-md shadow-[#f8f9fa] hover:shadow-lg hover:shadow-[#9381ff] hover:bg-[#f8f9fa] hover:text-[#2b2b2b] hover:scale-110 duration-300'>
            <img className='w-20 mx-auto ' alt='Pro Choice Hoodie logo'  src={mug}/>
            <p className='my-4 product-title'>{product}</p>
        </div>
    )
}