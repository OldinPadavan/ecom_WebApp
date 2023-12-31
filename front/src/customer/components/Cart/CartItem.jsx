import { Button, IconButton } from '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import React from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';
import ControlPointIcon from '@mui/icons-material/ControlPoint';

const CartItem = () => {
  return (
    <div className='p-5 shadow-lg border rounded-md'>
        <div className='flex items-center'>
            <div className='w=[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                <img className='w-full h-full object-cover object-top' src="https://market-place.hb.ru-msk.vkcs.cloud/woman/02915201506/M_2915_201_506_1.jpg" alt=''/>
            </div>

            <div className='ml-5 space-y-1'>
                <p className='font-semibold'>Оверсайз футболка в полоску</p>
                <p className='opacity-70'> Размер: S, Белый</p>
                <div>
                    <div className='flex space-x-5 items-center text-lg lg:text-lg text-gray-900 pt-6'>
                        <p className='font-semibold'>599 </p>
                        <p className='opacity-50 line-through'>1799</p>
                        <p className='text-red-500 font-semibold'>- 70%</p>
                    </div>
                </div>
            </div>
            
        </div>
        <div className='lg:flex items-center lg:space-x-10 pt-4'>
                    <div className='flext item-center space-x-2'>
                        <IconButton>
                        <DeleteForeverIcon/>
                        </IconButton>
                        <span className='py-1 px-7 border rounded-sm'> 3 </span>
                        <IconButton>
                        <AddBoxIcon/>
                        </IconButton>
                    </div>

                    <div>
                        <Button sx={{color: "black"}}>
                            Удалить
                        </Button>
                    </div>
                </div>
    </div>
  )
}

export default CartItem