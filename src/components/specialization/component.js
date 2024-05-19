"use client"
import { useParams } from 'next/navigation'
import React from 'react'
import "./styles.css"

const Specialization = ({ dict, route }) => {
  const { lang } = useParams()

  return (
    <div className='min-h-[550px] h-auto w-[570px] md:w-[350px] sm:w-full flex flex-col justify-between items-center p-5 rounded-md specialization-box '>
      <img src={route?.study_time} className='w-full h-[280px] rounded-md' />
      <div className='w-full flex flex-col justify-evenly items-center gap-4'>
        <p>{route?.[`title_${lang}`]}</p>
        <span className='break-words max-w-full'>{route?.[`description_${lang}`]}</span>

        <p>{dict?.entrants?.specializations?.long} {route?.long && route?.long} 2 года</p>

        <p>{dict?.entrants?.specializations?.format} {route?.budget && route?.budget}</p>

        <p>{dict?.entrants?.specializations?.contract} {route?.budget && route?.type?.toUpperCase()}</p>
      </div>
    </div>
  )
}

export default Specialization