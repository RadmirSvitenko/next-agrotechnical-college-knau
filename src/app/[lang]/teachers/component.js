"use client"

import { ArrowForwardIos } from '@mui/icons-material'
import React from 'react'
import "./styles.css"
import { Pagination } from '@mui/material'
import InfoMiniBox from '@/components/infoMiniBox/component'

const Teachers = ({ dict }) => {
  const learningList = [
    {
      image: "/college-value-preview.png",
      title: "Математика",
      button: dict?.teachers?.button,
    },
    {
      image: "/college-value-preview.png",
      title: "Физика",
      button: dict?.teachers?.button,
    },
    {
      image: "/college-value-preview.png",
      title: "Химия",
      button: dict?.teachers?.button,
    },
  ]

  const materials = [
    {
      image: '/education-route-icon.svg',
      title: dict?.teachers?.materials?.materialOne?.title,
      description: dict?.teachers?.materials?.materialOne?.description,
      button: dict?.teachers?.materials?.materialOne?.buttonText,
    },
    {
      image: '/education-route-icon.svg',
      title: dict?.teachers?.materials?.materialTwo?.title,
      description: dict?.teachers?.materials?.materialTwo?.description,
      button: dict?.teachers?.materials?.materialTwo?.buttonText,
    },

    {
      image: '/education-route-icon.svg',
      title: dict?.teachers?.materials?.materialThree?.title,
      description: dict?.teachers?.materials?.materialThree?.description,
      button: dict?.teachers?.materials?.materialThree?.buttonText,
    },

    {
      image: '/education-route-icon.svg',
      title: dict?.teachers?.materials?.materialFour?.title,
      description: dict?.teachers?.materials?.materialFour?.description,
      button: dict?.teachers?.materials?.materialFour?.buttonText,
    },

    {
      image: '/education-route-icon.svg',
      title: dict?.teachers?.materials?.materialFour?.title,
      description: dict?.teachers?.materials?.materialFour?.description,
      button: dict?.teachers?.materials?.materialFour?.buttonText,
    },

    {
      image: '/education-route-icon.svg',
      title: dict?.teachers?.materials?.materialFour?.title,
      description: dict?.teachers?.materials?.materialFour?.description,
      button: dict?.teachers?.materials?.materialFour?.buttonText,
    },
  ]

  return (
    <div className='w-full h-auto min-h-screen flex flex-col gap-[30px] pt-[47px] pb-[54px] px-[80px] md:px-[40px] sm:px-4 learning-plan-box'>
      <div className='flex flex-col justify-between gap-[15px]'>
        <p className='font-[800] text-[34px] text-[#000] text-center'>{dict?.teachers?.title}</p>

        <div className='flex gap-[15px] py-8 justify-between w-full overflow-x-scroll'>
          {learningList?.map((predmet, index) => (
            <div key={index} className='flex flex-col relative justify-evenly shadow-xl'>
              <div className={`w-[335px] min-h-[310px] h-auto p-[25px] flex flex-col justify-between items-center rounded-[5px] shadow-lg`}
              >
                <img src={predmet?.image} alt={predmet?.title} className='w-full h-[196px]' />

                <p className='font-[700] text-[20px] text-[#0072BC] text-center pt-[45px]'>{predmet?.title}</p>

                <div className='absolute translate-y-[170%] rounded-lg bg-white shadow-sm w-[86px] h-[86px] flex justify-center items-center mission-box-icon'>
                  <img src='/teacher-react-icon.svg' alt={predmet?.title} />
                </div>

                <span className="flex gap-3 pt-[60px] cursor-pointer items-center font-[700] text-[14px] sm:text-[10px] tracking-[1.5px] text-[#0072BC]">
                  {predmet?.button}
                  <ArrowForwardIos sx={{ fontSize: '14px' }} />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* <div
          className={'w-full flex justify-center items-center py-8'}
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
        </div> */}

        <div className='pt-[53px] pb-[55px]'>
          <div className='flex flex-wrap xl:gap-0 gap-7 justify-start w-full min-h-[450px]'>
            <div className='flex border-[1px] border-[#0072BC] flex-col p-[22px] xl:w-[30%] w-full'>
              <img src='/college-value-preview.png' className='w-full h-[320px] pb-5' />
              <p className='font-[800] text-[34px] md:text-[24px] sm:text-[20px] text-[#000]'>{dict?.teachers?.materials?.title}</p>
            </div>

            <div className='xl:w-[70%] px-4 w-full md:pt-4 sm:pt-4 justify-center flex-wrap sm:flex-col flex gap-4 items-center'>{materials?.map((item, index) => (
              <InfoMiniBox item={item} key={index} />
            ))}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Teachers

