import React from 'react'

import {Button, Grid, Box, TextField} from '@mui/material';

import AddressCart from '../AddressCart/AddressCart';


const DeliveryInfo = () => {

  const handleSubmit=(e)=>{
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const address = {
      lastName:data.get("lastName"),
      firstName:data.get("firstName"),
      middleName:data.get("middleName"),
      address:data.get("address"),
      city:data.get("city"),
      region:data.get("region"),
      postalCode:data.get("postalCode"),
      phoneNumber:data.get("phoneNumber")
    }

    console.log("address", address)
  }
  
  return (
    <div>
      <Grid container spacing={4}>
        <Grid xs={12} lg={4} className='border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll'>
          <div className='p-5 py-7 border-b cursor-pointer'>
            <AddressCart/>
            <Button sx={{mt:2, bgcolor:'black'}}
            size='large' variant='contained'>Выбрать для доставки</Button>
          </div>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Box className="border rounded-s-md shadow-md p-5">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField required
                  id="lastName"
                  name="lastName"
                  label="Фамилия"
                  fullWidth/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField required
                   id="firstName"
                   name="firstName"
                   label="Имя"
                   fullWidth/>
                  </Grid>
                  <Grid item xs={12} sm={6} >
                  <TextField 
                  id="middleName"
                  name="middleName"
                  label="Отчество"
                  fullWidth/>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                  <TextField required
                   id="city"
                   name="city"
                   label="Город"
                   fullWidth/>
                  </Grid>

                  <Grid item xs={12} >
                  <TextField required  
                  id="address"
                  name="address"
                  label="Адрес"
                  fullWidth
                  multiline
                  rows={2}/>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <TextField required
                   id="region"
                   name="region"
                   label="Регион"
                   fullWidth/>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <TextField required
                   id="postalCode"
                   name="postalCode"
                   label="Индекс"
                   fullWidth/>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <TextField required
                   id="phoneNumber"
                   name="phoneNumber"
                   label="Телефон"
                   fullWidth/>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <Button sx={{ py:2, mt:2, bgcolor:'black'}}
                  size='large' variant='contained'
                  type="submit">
                    Доставить сюда!
                  </Button>
                  </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>

    </div>
  )
}

export default DeliveryInfo