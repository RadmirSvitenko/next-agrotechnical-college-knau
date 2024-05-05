import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';

import { Navigation } from 'swiper/modules';
import { useParams, useRouter } from 'next/navigation';

const news = [
  {
    image: '/header-main.png',
    date: '00.00.0000',
    title: 'Новость1',
    description:
      'ОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписание',
    link: '/',
  },

  {
    image: '/header-main.png',
    date: '00.00.0000',
    title: 'Новость2',
    description:
      'ОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписание',
    link: '/',
  },

  {
    image: '/header-main.png',
    date: '00.00.0000',
    title: 'Новость3',
    description:
      'ОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписание',
    link: '/',
  },

  {
    image: '/header-main.png',
    date: '00.00.0000',
    title: 'Новость4',
    description:
      'ОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписание',
    link: '/',
  },

  {
    image: '/header-main.png',
    date: '00.00.0000',
    title: 'Новость5',
    description:
      'ОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписание',
    link: '/',
  },
];

const MainNewsBlock = ({ dict }) => {
  const { lang } = useParams();
  const router = useRouter();

  return (
    <div>
      {/* Mobile */}
      <div className="sm:p-[18px] relative sm:flex hidden sm:flex-col   sm:w-full">
        <p className="text-[#000] text-[32px] pt-[18px] pb-[13px] font-[800]">
          {dict?.mainPage?.mainNews?.title}
        </p>

        <Swiper
          navigation={true}
          modules={[Navigation]}
          loop={true}
          className="mainMobileNews"
        >
          {news?.map((event) => (
            <SwiperSlide>
              <div className="w-[252px] flex flex-col justify-start items-start h-[388px] bg-[#fff] p-[24px] pt-[22px] gap-[14px] overflow-hidden">
                <img
                  src={event?.image}
                  alt={event?.title}
                  className="w-[203px] h-[190px]"
                />

                <span className="font-[600] text-[11px] text-[#000]">
                  {event?.date}
                </span>
                <p className="font-[700] text-[25px] text-[#000]">
                  {event?.title}
                </p>
                <span className="block overflow-hidden text-[10px] font-[400] text-[#000] w-full max-h-12 leading-3 truncate">
                  {event?.description}
                </span>
                <p
                  onClick={() => router.push(`${lang}/news`)}
                  className="flex gap-3 justify-between items-center font-[700] text-[10.06px] tracking-[0.5px] text-[#0072BC]"
                >
                  Подробнее
                  <img
                    className="w-[3.5px]"
                    src="next-btn-main-news.png"
                    alt={event?.title}
                  />
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Other */}
      <div className="flex sm:hidden flex-col w-full">
        <div className="flex">
          <span className="text-[#000] text-[34px] pt-[60px] px-[80px] font-[800]">
            {dict?.mainPage?.mainNews?.title}
          </span>

          <span
            onClick={() => router.push(`${lang}/news`)}
            className="flex gap-3 pt-[60px] cursor-pointer justify-between items-center font-[700]
          text-[12px] tracking-[1.5px] text-[#0072BC]"
          >
            {dict?.mainPage?.mainNews?.link}

            <img
              className="w-[3.5px]"
              src="next-btn-main-news.png"
              alt={event?.title}
            />
          </span>
        </div>

        <div className="flex w-full pt-[71px] pb-[100px] px-[80px] gap-4">
          {news
            ?.filter((event, index) => index === 0)
            .map((event, index) => (
              <div className="flex flex-col w-1/2">
                <img
                  src={event?.image}
                  alt={event?.name}
                  className="w-full h-[35%]"
                />
                <div className="bg-[#0072BC] flex flex-col p-8 justify-evenly items-start text-[#fff] w-full h-[65%]">
                  <p className="font-[900] text-[#FFFFFF] md:text-[9px] text-[11px]">
                    {event?.date}
                  </p>
                  <p className="font-[600] text-[#FFFFFF] md:text-[28px] text-[34px]">
                    {event?.title}
                  </p>
                  <span className="block py-1 overflow-hidden md:text-[14px] text-[18px] text-[#FFFFFF] font-[400] w-full max-h-12 leading-3 truncate">
                    {event?.description}
                  </span>
                  <span
                    onClick={() => router.push(`${lang}/news/1`)}
                    className="flex gap-3 cursor-pointer justify-between items-center font-[700]
          text-[10px] tracking-[1.02px] text-[#ffffff]"
                  >
                    {dict?.mainPage?.mainNews?.link}

                    <img
                      className="w-[3.5px]"
                      src="next-btn-main-news.png"
                      alt={event?.title}
                    />
                  </span>
                </div>
              </div>
            ))}

          <div className="flex flex-col md:gap-2 gap-7 w-1/2">
            {news
              ?.filter((event, index) => index > 0 && index <= 2)
              .map((event, index) => (
                <div className="flex shadow-sm border-[#ECECEC] border-[1.5px] flex-col h-1/2">
                  <div className="flex flex-col items-start justify-between">
                    <img
                      src={event?.image}
                      alt={event?.title}
                      className="w-full h-1/2"
                    />
                    <div className="flex p-4 w-full h-1/2 gap-3 flex-col justify-evenly">
                      <p className="font-[900] text-[#838383] md:text-[9px] text-[11px]">
                        {event?.date}
                      </p>
                      <span className="block font-[900] text-[#000000] py-1 overflow-hidden text-[18px] md:text-[12px] w-full leading-3 truncate">
                        {event?.description}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNewsBlock;
