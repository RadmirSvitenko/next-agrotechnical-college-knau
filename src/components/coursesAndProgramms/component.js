"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

const CoursesAndPrograms = ({ course, dict }) => {

  const router = useRouter()

  return (
    <div className='flex flex-col w-[350px] h-[520px]'>
      <img src={course?.image} alt={course?.title} className='w-full h-[260px]' />
      <div className='w-full flex flex-col  gap-4 justify-evenly px-[30px] py-[20px] items-start bg-[#0072BC] shadow-xl'>
        <p className='text-[24px] font-[700] text-[#fff]'>{course?.title}</p>
        <span className='text-[14px] font-[500] text-[#fff]'>{course?.description}</span>

        <p className='text-[14px] font-[600] text-[#fff]'>{dict?.additionalEducation?.coursesAndPrograms?.duration} : {course?.longer}</p>

        <p className='text-[14px] font-[600] text-[#fff]'>{dict?.additionalEducation?.coursesAndPrograms?.price} : {course?.price}</p>

        <button
          onClick={() => router.push(`${lang}/`)}
          className="flex gap-3 justify-between items-center font-[700] text-[11px] tracking-[1.2px] text-[#fff]"
        >
          {dict?.additionalEducation?.coursesAndPrograms?.aboutButton}
          <img
            className="w-[5px] h-[10px]"
            src="next-btn-additional-courses.png"
            alt='Подробнее КНАУ'
          />
        </button>
      </div>
    </div>
  )
}

export default CoursesAndPrograms