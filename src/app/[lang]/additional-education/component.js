import CoursesAndPrograms from '@/components/coursesAndProgramms/component'
import { Pagination } from '@mui/material'
import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

import { Navigation } from 'swiper/modules';
import AdditionalEducationAdvantages from '@/components/additionalEducationAdvantages/component';

const AdditionalEducation = ({ dict }) => {

  const allCourses = [
    {
      image: "/additional-education-preview.png",
      title: 'Название курса',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum risus nec massa ultrices maximus. Duis molestie ullamcorper sapien, sit amet ultrices urna dictum a. Fusce nec mattis urna, nec egestas ipsum',
      longer: '23 года',
      price: 2024
    },

    {
      image: "/additional-education-preview.png",
      title: 'Название курса',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum risus nec massa ultrices maximus. Duis molestie ullamcorper sapien, sit amet ultrices urna dictum a. Fusce nec mattis urna, nec egestas ipsum',
      longer: '23 года',
      price: 2024
    },

    {
      image: "/additional-education-preview.png",
      title: 'Название курса',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum risus nec massa ultrices maximus. Duis molestie ullamcorper sapien, sit amet ultrices urna dictum a. Fusce nec mattis urna, nec egestas ipsum',
      longer: '23 года',
      price: 2024
    }
  ]

  const advantages = [
    {
      image: "/additional-education-preview.png",
      icon: "/additional-advantages-one.svg",
      title: 'Название курса',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum risus nec massa ultrices maximus. Duis molestie ullamcorper sapien, sit amet ultrices urna dictum a. Fusce nec mattis urna, nec egestas ipsum',
    },

    {
      image: "/additional-education-preview.png",
      icon: "/additional-advantages-two.svg",
      title: 'Название курса',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum risus nec massa ultrices maximus. Duis molestie ullamcorper sapien, sit amet ultrices urna dictum a. Fusce nec mattis urna, nec egestas ipsum',
    },

    {
      image: "/additional-education-preview.png",
      icon: "/additional-advantages-three.svg",
      title: 'Название курса',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum risus nec massa ultrices maximus. Duis molestie ullamcorper sapien, sit amet ultrices urna dictum a. Fusce nec mattis urna, nec egestas ipsum',
    }
  ]

  const classSchedule = [
    {
      title: "Физика",
      file: "/"
    },
    {
      title: "Химия",
      file: "/"
    },
    {
      title: "Биология",
      file: "/"
    }
  ]

  return (
    <div className='w-full flex flex-col h-auto min-h-screen max-w-[1440px] py-[50px] px-[80px] md:px-[40px] sm:px-4 bg-[#F1F3F4]'>
      <div className='w-full flex flex-col justify-between items-center'>
        <p className='text-[#000000] text-[34px] md:text-[28px] sm:text-[22px] font-[800] text-center'>{dict?.additionalEducation?.coursesAndPrograms?.title}</p>

        <div className='w-full gap-4 md:gap-7 sm:gap-10 flex flex-wrap py-[50px] justify-evenly items-center'>
          {allCourses?.map((course, index) => (
            <CoursesAndPrograms course={course} dict={dict} key={index} />
          ))}
        </div>

        <Pagination
          variant="outlined"
          shape="rounded"
          // onChange={handleChangePage}
          // page={tendersProps.page}
          page={1}
          // count={Math.ceil(tendersProps.count / tendersProps.pageSize) || 1}
          count={5}
          showFirstButton
          showLastButton
          siblingCount={2}
        />
      </div>
      {/* 
      <div className='w-full pt-[63px] flex flex-col justify-between items-center'>
        <p className='text-[#292C3D] text-[40px] font-[700] text-center'>{dict?.additionalEducation?.classSchedule?.title}</p>

        <div className='w-full flex py-[50px] gap-4 justify-evenly items-center'>
          <Swiper>
            {classSchedule?.map(({ title, file }, index) => (
              <SwiperSlide key={index}>
                <div className='w-[320px] rounded-md bg-[#D9D9D9] flex flex-col justify-between items-center p-2.5'>
                  <p className='text-[22px] font-[700] text-[#292C3D]'>{title}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div> */}

      <div className='w-full flex flex-col pt-[63px] justify-between items-center'>
        <p className='text-[#000000] text-[34px] md:text-[28px] sm:text-[22px] font-[800] text-center'>{dict?.additionalEducation?.advantages?.title}</p>

        <div className='w-full gap-4 md:gap-7 sm:gap-10 flex flex-wrap py-[50px] justify-evenly items-center'>
          {advantages?.map((advantage, index) => (
            <AdditionalEducationAdvantages advantage={advantage} dict={dict} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AdditionalEducation

