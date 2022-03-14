import Link from 'next/link'
const CardProduct = ({product}) => {
  return (
    <div className='lg:w-1/4 md:w-1/2 p-4 w-full bg-white shadow-md rounded-sm' key={product.id}>
      <a className='block relative h-48 rounded overflow-hidden'>
        {product.images && product.images.length > 0 ? (
          <img
            alt={product.name}
            className='object-contain object-center w-full h-full block'
            src={product.images[0]}
          />
        ) : (
          <img
            alt={product.name}
            className='object-cover object-center w-full h-full block'
            src='https://dummyimage.com/420x260'
          />
        )}
      </a>
      <div className='mt-4'>
        <h3 className='text-gray-500 text-xs tracking-widest title-font mb-1'>
          {product.brand.name}
        </h3>
        <h2 className='text-gray-900 title-font text-lg font-medium'>
          <Link href={`/produto/${product.slug}`}>{product.name}</Link>
        </h2>
        <p className='mt-1'>R$ {product.variations[0].price.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default CardProduct
