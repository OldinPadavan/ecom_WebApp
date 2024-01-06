import React from 'react'
import { Step, StepLabel, Stepper } from '@mui/material'
import { blue } from '@mui/material/colors'



const orderSteps=[
    "Сформирован",
    "Огружен",
    "В пути",
    "Готов к выдаче"
]

const OrderTracker = ({activeStep}) => {
  return (
    <div className='w-full'>
        <Stepper activeStep={activeStep} alternativeLabel>
            {orderSteps.map((label)=> <Step>
                <StepLabel sx={{color: blue, fontSize:"44px"}}>{label}</StepLabel>
            </Step>)}
        </Stepper>
    </div>
  )
}

export default OrderTracker