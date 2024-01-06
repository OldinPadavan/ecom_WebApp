import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Button, Grid, Box, TextField} from '@mui/material';
import { Wrapper, Status } from '@googlemaps/react-wrapper';


const DeliveryInfo = () => {
  const [age, setAge] = React.useState('');

 
  
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <Grid container spacing={2}>
        <Grid xs={6} lg={3}className='border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll'>
          <div className='p-5 py-7 border-b cursor-pointer'>
          <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel size='small' id="demo-simple-select-autowidth-label">Магазины:</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </Select>
      </FormControl>
          </div>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box className="border rouded-s-md shadow-md p-5">
            <form>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                  disabled
                  id="storeName"
                  name="storeName"
                  label="Название магазина"
                  fullWidth
                  />                 
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                  disabled
                  id="storePhone"
                  name="storePhone"
                  label="Контактный телефон"
                  fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                <TextField
                  disabled
                  id="storeAddress"
                  name="storeAddress"
                  label="Адрес магазина"
                  fullWidth
                  multiline
                  rows={4}
                  /> 
                </Grid>
                <Grid item xs={2} sm={2}>
                  <Button sx={{py: 1.5, mt: 2, bgcolor: 'black'}}
                  size='large'
                  variant='contained'
                  type='submit'>
                    Доставить сюда
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