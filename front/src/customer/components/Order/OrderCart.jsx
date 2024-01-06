import React from 'react'
import { Grid } from '@mui/material'
import FilterTiltShiftRoundedIcon from '@mui/icons-material/FilterTiltShiftRounded';
import { useNavigate } from 'react-router-dom';

const OrderCart = () => {
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-md shadow-grey hover:shadow-2x1 border'>
      <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
        <Grid item xs={6}>
          <div className='flex cursor-pointer'>
            <img className= 'w-[5rem] h-[5rem] object-cover object-top' src="https://market-place.hb.ru-msk.vkcs.cloud/woman/02915201506/M_2915_201_506_1.jpg" alt= ""/>
            <div className='ml-5 space-y-2'>
              <p>Woman's basic T-Shirt</p>
              <p className='opacity-50 text-xs font-semibold'>Размер: S</p>
              <p className='opacity-50 text-xs font-semibold'>Цвет: белый</p>

            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>599</p>
        </Grid>
        <Grid item xs={4}>
          {true && <div>
          <p>
            <FilterTiltShiftRoundedIcon sx={{with:"15px",height:"15px"}} className='text-green-600 mr-2 text-sm'/>
            <span>
              Доставлено 29.01.2024
            </span>
          </p>
          <p className='text-xs'>
            Этот заказ был доставлен
          </p>
          </div>}
          {false &&<p>
            <span>
              Доставка запланирована 29.01.2024
            </span>
          </p> }
        </Grid>
      </Grid>
    </div>
  )
}

export default OrderCart