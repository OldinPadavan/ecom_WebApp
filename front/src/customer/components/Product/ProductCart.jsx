import React from 'react'
import "./ProductCart.css"
import { useNavigate } from 'react-router-dom'


const ProductCart = ({ products }) => {
    const navigate=useNavigate();
    return (
        <div onClick={() => navigate(`/product/${5}`)} className='productCart w-[15rem] m-3 transition-all cursor-pointer'>
            <div className='h-[20rem]'>
                <img className='h-full w-full object-cover object-left-top'
                    src={products.imageUrl}
                alt="" />
            </div>

            <div className='textPart bg-white p-3'>
                <div>
                    <p className='font-bold opacity-60'>{products.title}</p>
                    <p>{products.code}</p>
                </div>
                <div className='flex item-center space-x-2'>
                    <p className='font-semibold'>{products.discountedPrice}</p>
                    <p className='line-through opacity-50'>{products.price}</p>
                    <p className='text-red-600 font-semibold'>-{products.discountPersent}%</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCart