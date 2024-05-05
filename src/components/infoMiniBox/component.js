import React from 'react'

const InfoMiniBox = ({ item }) => {
  return (
    <div className='w-[250px] shadow-xl rounded-[5px] items-center justify-evenly sm:w-full md:w-full min-h-[250px] gap-7 flex flex-col p-5'>
      <img src={item?.image} alt={item?.title} className='w-[41px] h-[64px]' />
      <p className='font-[700] text-[20px] text-center text-[#0072BC]'>{item?.title}</p>

      <span className='font-[400] text-[14px] leading-[22px] text-center text-[#000]'>{item?.description}</span>
      <button className='font-[700] text-[8px] tracking-[0.8px] text-[#0072BC]'>{item?.button}</button>
    </div>
  )
}

export default InfoMiniBox