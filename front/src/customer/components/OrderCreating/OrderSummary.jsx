import React from 'react'
import CartItem from '../Cart/CartItem'
import { Button, IconButton } from '@mui/material'
import AddressCart from '../AddressCart/AddressCart'

const OrderSummary = () => {
  return (
    <div>
      <div className='p-5 shadow-lg rounded-s-md border'>
        <AddressCart/>
      </div>
      <div>
        <div className='lg:grid grid-cols-3 relative py-3'>
            <div className='col-span-2'>
            {[1, 1, 1, 1].map((item)=><CartItem/>)}
            </div>

            <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
            <div className='border'>
                <p className='uppercase font-bold opacity-60 pb-4'>Сумма заказа</p>
                <hr />
                <div className='space-y-3 font-semibold mb-20'>
                    <div className='flex justify-between pt-3 text-black'>
                        <span>Цена</span>
                        <span>599</span>
                    </div>
                    <div className='flex justify-between pt-3 text-red-600'>
                        <span>Скидка</span>
                        <span>599</span>
                    </div>
                    <div className='flex justify-between pt-3 text-black font-bold'>
                        <span>Итоговая стоимость</span>
                        <span>599</span>
                    </div>

                </div>
                <Button variant="contained" className='w-full mt-5'sx={{px:"2rem", py:"1rem", bgcolor:"black"}}>
                    Оформить заказ
                </Button>
            </div>
        </div>
        </div>

    </div>
    </div>
  )
}

export default OrderSummary