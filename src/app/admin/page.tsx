import React from 'react'
import CountMeter from './components/CountMeter'
import RevenueChart from './components/RevenueChart'
import OrdersChart from './components/OrdersChart'

const page = () => {
  return (
    <div className='flex flex-col gap-6  p-5'>
      <CountMeter/>
     <div className='flex gap-3'>  
      <RevenueChart/>
     
     <OrdersChart/>
     </div>
    </div>

  )
}

export default page