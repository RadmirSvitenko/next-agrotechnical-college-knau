"use client"

import PrioretyEntrantsBlock from '@/components/prioretyEntrantsBlock/component'
import PrioretyEntrantsDate from '@/components/prioretyEntrantsDate/component'
import { API } from '@/requester'
import { useParams } from 'next/navigation'
import React, { useCallback, useEffect, useState } from 'react'

const Entrants = ({ dict }) => {

  const { lang } = useParams()

  const [prioretyDate, setPrioretyDate] = useState([])
  console.log('prioretyDate: ', prioretyDate);

  const handleGetPrioretyDates = useCallback(async () => {
    const response = await API.get('education/admission-dates')
    const data = response.data.results;
    setPrioretyDate(data)
  }, [])

  useEffect(() => {
    handleGetPrioretyDates()
  }, [handleGetPrioretyDates])

  return (
    <div className='w-full flex flex-col items-center'>
      <div className='w-full max-w-[1440px] h-auto min-h-screen py-[50px] md:py-[25px] sm:py-3 px-[80px] md:px-[40px] sm:px-4 flex flex-col items-center justify-between'>
        <PrioretyEntrantsBlock dict={dict} />
        <div className='w-full flex flex-col justify-between gap-[30px]   text-center'>
          <p className='font-[800] text-[#000] text-[34px] md:text-[20px] sm:text-[18px]'>{dict?.entrants?.dateReception?.title}</p>

          <div className='w-full flex justify-evenly items-center flex-wrap'>
            {prioretyDate?.map((data, index) => (
              <PrioretyEntrantsDate data={data} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Entrants