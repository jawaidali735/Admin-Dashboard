import React from 'react'
import CountMeter from './components/CountMeter'
import RevenueChart from './components/RevenueChart'
import OrdersChart from './components/OrdersChart'

const page = () => {
  return (
    <div className='flex flex-col gap-6 p-5 overflow-hidden'>
      <CountMeter />
      <div className='flex flex-col md:flex-row gap-6 md:gap-8'>
        <div className='flex-1'>
          <RevenueChart />
        </div>
        <div className='flex-1'>
          <OrdersChart />
        </div>
      </div>
    </div>
  )
}

export default page
