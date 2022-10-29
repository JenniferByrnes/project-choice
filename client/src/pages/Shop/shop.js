import ProductCard from "../../components/ProductCard/ProductCard";
import "./shop.css";

function Shop() {
  const productArray = ['prochoice hoodie', 'Beanie', 'my choice mug']

  return (
    <div name='technical-skills' className='w-full h-screen text-[#f8f9fa]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='max-w-[1000px] w-full'>
          <div className='text-center'>
            <h2 className='text-4xl inline border-b-4 border-[#9381ff] py-2'>Shop</h2>
          </div>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-x-1 gap-y-8 text-center py-8'>
          {productArray.map((product) => (
            <ProductCard product={product} />
          ))}

        </div>
      </div>
    </div>
  )
}

export default Shop;