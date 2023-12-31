import { Grid, Typography, Button, Link, } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <Grid className='bg-black  text-white text-center mt-10'
            container
            sx={{bgcolor: "black", color:"white", py:3}}
            >
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'> Company </Typography>
                    <div>
                    <Button className='pb-5' variant='h6' > About </Button>
                    </div>
                    
                    <div>
                    <Button className='pb-5' variant='h6'> Contacts </Button>
                    </div>
    
                    <div>
                    <Button className='pb-5' variant='h6'> Coockie </Button>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'> Company </Typography>
                    <div>
                    <Button className='pb-5' variant='h6' > About </Button>
                    </div>
                    
                    <div>
                    <Button className='pb-5' variant='h6'> Contacts </Button>
                    </div>
    
                    <div>
                    <Button className='pb-5' variant='h6'> Coockie </Button>
                    </div>
                </Grid>

                <Grid className= 'pt-20' item xs={12}>
                <Typography variant="body2" component="p" align="center">
                    &copy; 2023 R-mixed. All right reserved.    
                </Typography>
                <Typography variant="body2" component="p" align="center">
                    Made by Shirokov Fedor    
                </Typography>
                <Typography variant="body2" component="p" align="center">
                    Icon and design made by {' '}
                    <Link href="https://tailwindui.com/" color="inherit" underline="always">
                    TailwindUI
                    </Link>{' '}    
                </Typography> 
                </Grid>
            </Grid>
            
        </div>
    )
}

export default Footer