import React from 'react'
import OrderTracker from './OrderTracker'
import { Grid } from '@mui/material'

const OrderDetails = () => {
  return (
    <div className='px:5 lg:px-20'>
        <div>
            <h1 className='font-bold text-xl py-7'>Магазин доставки</h1>
        </div>
        <div className='py-20'>
            <OrderTracker activeStep={3}/>
        </div>

        <Grid className='space-y-5' container>
        {[1, 1, 1, 1].map((item) => <Grid item container className='shadow-xl rounded-md p-5 border'
            sx={{alignItems:'center', justifyContent:'space-between'}}>
                <Grid item xs= {6}>
                    <div className='flex items-center space-x-4'>
                        <img className='w-[5rem] h-[5rem] object-cover object-top'
                         src="https://market-place.hb.ru-msk.vkcs.cloud/woman/02915201506/M_2915_201_506_1.jpg" alt= ""/>
                         <div className='space-y-2 ml-5'>
                            <p className='font-semibold '>Woman's basic T-shirt</p>
                            <p className='space-x-5 opacity-50 text-xs font-semibold'> <span>Цвет: Белый </span> <span>Размер: S </span></p>
                            <p>599</p>
                         </div>
                    </div>
                </Grid>

            </Grid>)}
        
        </Grid>
    </div>


    
  )
}

export default OrderDetails