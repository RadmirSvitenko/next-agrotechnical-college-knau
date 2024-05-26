"use client"

import CooperationNewsBlock from '@/components/cooperationNewsBlock/component'
import CooperationPrograms from '@/components/cooperationPrograms/component'
import { API } from '@/requester'
import { useParams } from 'next/navigation'
import React, { useCallback, useEffect, useState } from 'react'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import "./styles.css"

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import ProgrammsMiniBox from '@/components/programmsMiniBox/component'
import { useMediaQuery, useTheme } from '@mui/material'

const InternatonalCooperation = ({ dict }) => {
  const [news, setNews] = useState([])
  const [programms, setProgramms] = useState([])
  const [contacts, setContacts] = useState([])

  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  const md = useMediaQuery(theme.breakpoints.down('md'));

  const capibilitiesStudents = [
    { title: dict?.cooperation?.capibilitiesStudentsBlock?.texts?.textOne, image: "/cooperation-students-capibilities-icon.svg" },

    { title: dict?.cooperation?.capibilitiesStudentsBlock?.texts?.textTwo, image: "/cooperation-students-capibilities-icon.svg" },

    { title: dict?.cooperation?.capibilitiesStudentsBlock?.texts?.textThree, image: "/cooperation-students-capibilities-icon.svg" },

    { title: dict?.cooperation?.capibilitiesStudentsBlock?.texts?.textFour, image: "/cooperation-students-capibilities-icon.svg" },

    { title: dict?.cooperation?.capibilitiesStudentsBlock?.texts?.textFive, image: "/cooperation-students-capibilities-icon.svg" }
  ]

  const { lang } = useParams()

  const handleGetNews = useCallback(async () => {
    const response = await API.get("news/news")
    const data = await response.data.results
    setNews(data)
  }, [])


  const handleGetProgramms = useCallback(async () => {
    const response = await API.get("education/courses-programms")
    const data = await response.data.results
    setProgramms(data)
  }, [])

  const handleGetContacs = useCallback(async () => {
    const response = await API.get("abouts/contact-information")
    const data = await response.data.results
    setContacts(data)
  }, [])

  useEffect(() => {
    handleGetNews();
    handleGetProgramms()
    handleGetContacs()
  }, [handleGetNews, handleGetProgramms, handleGetContacs]);

  return (
    <div className='flex flex-col w-full px-[100px] md:px-[40px] sm:px-4 items-center h-auto min-h-screen bg-[#F1F3F4]'>
      <CooperationNewsBlock dict={dict} news={news} />
      <CooperationPrograms dict={dict} />

      <div className='w-full  h-[300px] my-10 flex items-center'>
        {programms && programms.length > 0 && (
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            initialSlide={2}
            centeredSlides={true}
            autoplay={{
              Autoplay: 5000,
              disableOnInteraction: false,
            }}
            slidesPerView={3}
            loop={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 120,
              modifier: 1,
              slideShadows: false,
            }}
            modules={[EffectCoverflow, Autoplay]}
            className="programms"
          >
            {programms?.map((programm, index) => (
              <SwiperSlide key={index}>
                <div className='bg-white w-[300px] h-[300px] shadow-xl rounded-xl p-5 flex flex-col justify-evenly items-center'>
                  <p className='text-[#000000] truncate w-full text-[26px] font-[700]'>{programm?.[`title_${lang}`]}</p>

                  <span>{programm?.[`description_${lang}`]}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      <div className='py-[50px] flex flex-col gap-[30px]'>
        <p className='text-[34px] md:text-[24px] sm:text-[16px] text-[#000] font-[900] text-center'>{dict?.cooperation?.capibilitiesStudentsBlock?.title}</p>

        <div className='w-full flex flex-wrap justify-evenly gap-[25px]'>{capibilitiesStudents?.map((item, index) => (
          <ProgrammsMiniBox item={item} index={index} />
        ))}</div>
      </div>

      <div className='w-full flex flex-col justify-center items-center gap-[30px] py-[50px]'>
        <p className='text-[34px] md:text-[24px] sm:text-[16px] text-[#000] font-[900] text-center'>{dict?.cooperation?.contacts?.title}</p>

        <div className='flex flex-col gap-7 shadow-xl p-7 bg-white'>
          {contacts?.map((contact, index) => (
            <div key={index} className='flex w-full md:flex-col sm:flex-col md:items-center sm:items-center gap-7 sm:py-[30px] flex-wrap justify-evenly items-center'>
              <img src={`/contact-info-icon-${index + 1}.svg`} className='w-[45px] h-[45px]' />

              <div className='flex flex-col justify-start w-[300px] sm:w-full'>
                <p className='font-[500] text-center text-[20px] text-[#000]'>{contact?.[`text_${lang}`]}</p>
              </div>

              <div className='flex flex-col justify-start w-[300px] sm:w-full'>
                <p className='font-[700] text-start md:text-center sm:text-center text-[24px] text-[#000]'>{contact?.[`title_${lang}`]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div >
  )
}

export default InternatonalCooperation