"use client"

import BlogAndNewsCard from '@/components/blogAndNewsCard/component'
import { ArrowForwardIos } from '@mui/icons-material'
import { Pagination } from '@mui/material'
import React, { useState } from 'react'
import './styles.css'

const BlogAndNews = ({ dict }) => {
  const [animDoc, setAnimDoc] = useState(0)

  const testNews = [
    {
      image: "/blog-and-news-preview.png",
      title: "news1",
      description: "news desc1news desc1news desc1news desc1news desc1news desc1news desc1"
    },

    {
      image: "/blog-and-news-preview.png",
      title: "news2",
      description: "news desc2news desc1news desc1"
    },

    {
      image: "/blog-and-news-preview.png",
      title: "news3",
      description: "Далеко далеко Далеко далеко Далеко далеко Далеко далеко Далеко далеко Далеко далеко Далеко далеко Далеко далеко Далеко далеко Далеко далеко Далеко далеко Далеко далеко Далеко далеко Далеко далеко Далеко далеко Далеко далеко Далеко далеко Далеко далеко Далеко далеко Далеко далеко Далеко далеко "
    },

    {
      image: "/blog-and-news-preview.png",
      title: "news4",
      description: "news desc4"
    },

    {
      image: "/blog-and-news-preview.png",
      title: "news5",
      description: "news desc5"
    },

    {
      image: "/blog-and-news-preview.png",
      title: "news6",
      description: "news desc6"
    }
  ]


  const testEvents = [
    {
      year: 2024,
      day: 8,
      month: "Марта",
      title: "ввввв",
      description: "news desc1news desc1news desc1news desc1news desc1news desc1news desc1",
      direction: "ИТ",
      format: "Очный",
      organizer: "П.П. Пупкин"
    },
    {
      year: 2024,
      day: 9,
      month: "Мая",
      title: "news1",
      description: "news desc1news desc1news desc1news desc1news desc1news desc1news desc1",
      direction: "ИТ",
      format: "Очный",
      organizer: "П.П. Пупкин"
    },

    {
      year: 2024,
      day: "news1",
      month: "Март",
      title: "news1",
      description: "news desc1news desc1news desc1news desc1news desc1news desc1news desc1",
      direction: "ИТ",
      format: "Очный",
      organizer: "П.П. Пупкин"
    },

    {
      year: 2024,
      day: "news1",
      month: "Март",
      title: "news1",
      description: "news desc1news desc1news desc1news desc1news desc1news desc1news desc1",
      direction: "ИТ",
      format: "Очный",
      organizer: "П.П. Пупкин"
    },
  ]

  const testDocs = [
    {
      image: "/docs-simple-preview.png",
      title: "news1",
      description: "news desc1news desc1news desc1news desc1news desc1news desc1news desc1"
    },

    {
      image: "/docs-simple-preview.png",
      title: "news2",
      description: "news desc2news desc1news desc1"
    },

    {
      image: "/docs-simple-preview.png",
      title: "news3",
      description: "Далеко далеко Далеко далеко Далеко далеко Далеко далеко Далеко далеко"
    },

    {
      image: "/docs-simple-preview.png",
      title: "news4",
      description: "news desc4"
    },
  ]

  return (
    <div className='flex flex-col'>
      <div className='pt-[81px] px-[150px] md:px-[70px] sm:px-4 flex flex-col max-w-[1440px]'>
        <div className='flex w-full gap-3 items-center'>
          <img src='/all-news-title-icon.svg' alt='Все новости' className='w-[72px] h-[72px]' />
          <p className='font-[900] text-[47px] md:text-[30px] sm:text-[22px] text-[#000000]'>{dict?.blogAndNews?.titles?.allNews}</p></div>

        <div className='flex justify-between md:justify-center sm:justify-center items-center gap-[34px] pb-[34px] flex-wrap pt-[53px]'>{testNews?.map((event, index) => (
          <BlogAndNewsCard event={event} key={index} />
        ))}</div>

        <div
          className={'w-full flex justify-center items-center py-6'}
        >
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
      </div>

      <div className='flex flex-col md:px-[40px] sm:px-4 px-[80px]'>
        <p className='font-[900] text-[34px] md:text-[28] sm:text-[20px] text-[#000000] pb-[41px]'>{dict?.blogAndNews?.titles?.simpleDocs}</p>
        <div className='flex md:flex-col sm:flex-col w-full justify-between md:justify-center sm:justify-center items-center gap-3 pb-[34px] pt-[53px]'>
          {testDocs?.map((doc, index) => (
            <div
              onMouseMove={() => setAnimDoc(index)}
              onMouseLeave={() => setAnimDoc(0)}
              key={index}
              style={{
                backgroundImage: `url(${doc?.image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
              }}
              className={`${animDoc === index ? 'w-[40%]' : 'w-[20%]'} p-[22px] justify-end sm:w-full md:w-full h-[650px] relative flex flex-col  `}
            >

              <div className={`h-[200px] overflow-y-hidden transform transition-transform duration-300 ease-in-out ${animDoc !== doc?.title ? 'rotate-270' : ''} gap-[9px]`}>
                <p className='font-[700] text-[33px] text-[#fff]'>{doc?.title}</p>
                <span className='font-[700] text-[16px] text-[#fff]'>{doc?.description}</span>
                <span className="flex gap-3 pt-[60px] cursor-pointer items-center font-[700] text-[14px] sm:text-[10px] tracking-[1.5px] text-[#ffffff]">
                  {dict?.blogAndNews?.titles?.aboutButton}
                  <ArrowForwardIos sx={{ fontSize: '14px' }} />
                </span>
              </div>
            </div>
          ))}
        </div>

        <div
          className={'w-full flex justify-center items-center py-6'}
        >
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
      </div>

      <div className='flex pt-[55px] pb-[69px] justify-between lg:px-[100px] md:px-7 sm:px-4 px-[130px] md:w-full sm:w-full md:flex-wrap sm:flex-wrap'>
        <div className='flex md:w-full sm:w-full flex-col gap-5'>
          <div className='flex gap-[10px]'>
            <img src='/calendar-preview.svg' alt='calendar' />
            <div className='flex flex-col'>
              <p className='font-[900] text-[32px] text-[#000]'>{dict?.blogAndNews?.titles?.calendar}</p>
              <span className='font-[700] text-[13px] text-[#0072BC]'>{dict?.blogAndNews?.titles?.allEvent}</span>
            </div>
          </div>
          <div className='w-[325px] h-[551px] sm:w-full md:w-full flex p-7 shadow-lg' style={{
            backgroundImage: 'url(/event-preview.png)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}>
          </div>
        </div>


        <div className='md:pt-4 sm:pt-4 w-full lg:justify-center md:justify-center sm:justify-center sm:flex-col flex flex-wrap gap-7'>{testEvents?.map((event, index) => (
          <div key={index} className='w-[350px] sm:w-full md:w-full h-[326px] overflow-y-hidden border-[1px] border-[#0072BC] gap-7 flex flex-col justify-between px-7 pt-[17px] pb-[30px]'>
            <div className='flex w-full justify-between'>
              <div className='flex flex-col'>
                <p className='text-[12px] text-[#000] font-[600]'>{event?.year}</p>
                <p className='text-[18px] text-[#0072BC] font-[800]'>{event?.day} {event?.month}</p>
              </div>
              <img src='/calendar-preview.svg' alt='КНАУ календарь' className='w-[22px] h-[22px]' />
            </div>
            <hr className='border-[1px] border-[#000]' />

            <div className='flex flex-col justify-between gap-7'>
              <div className='flex flex-col gap-2 overflow-y-hidden'>
                <h6 className='text-[20px] font-[700] text-[#0072BC]'>{event?.title}</h6>
                <span className='text-[14px] font-[400] text-[#000000] tracking-[1px]'>{event?.description}</span>
              </div>

              <div className='flex flex-col gap-2'>
                <p className='font-[700] text-[10px] text-[#0072BC]'>{event?.direction}</p>
                <p className='font-[700] text-[10px] text-[#0072BC]'>{event?.format}</p>
                <p className='font-[700] text-[10px] text-[#0072BC]'>{event?.organizer}</p>
              </div>
            </div>
          </div>
        ))}</div>
      </div>
    </div>
  )
}

export default BlogAndNews