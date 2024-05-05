"use client"

import { getDictionary } from '@/app/[lang]/dictionaries';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [dict, setDict] = useState('ru');
  const [footerLink, setFooterLink] = useState();

  const { lang } = useParams()
  const router = useRouter()

  const handleGetLanguage = async () => {
    const dict = await getDictionary(lang);
    setDict(dict);
  };

  const footerListOne = [
    {
      name: dict?.footer?.list?.blogAndNewsFeed, link: `${lang}/blog-and-news`
    },
    { name: dict?.footer?.list?.additionalEducation, link: "/" },
    { name: dict?.footer?.list?.educationalActivity, link: "/" },
    { name: dict?.footer?.list?.multimedia, link: "/" },
    { name: dict?.footer?.list?.informationForStudents, link: "/" },
    { name: dict?.footer?.list?.contactInformation, link: "/" },
  ]

  const footerListTwo = [
    { name: dict?.footer?.list?.informationForTeachers, link: "/" },
    { name: dict?.footer?.list?.aboutTeachers, link: "/" },
    { name: dict?.footer?.list?.toApplicants, link: "/" },
    { name: dict?.footer?.list?.electronicLibrary, link: "/" },
    { name: dict?.footer?.list?.internationalCooperation, link: "/" },
    { name: dict?.footer?.list?.siteMap, link: "/" },
  ]

  useEffect(() => {
    handleGetLanguage();
  }, [lang]);

  return <div className='w-full bg-[#0072BC] text-[#fff] min-h-[500px] flex flex-col px-[82px] md:px-0 md:justify-center sm:px-[20px] sm:justify-center pt-[50px] pb-[136px]'>
    <div className='flex gap-5 md:gap-3 sm:gap-3 items-center md:justify-center sm:justify-center pb-[46px]'>
      <img src='/footer-logo.svg' alt='footer-logo-knau' className='w-[80px] h-[80px]' />
      <span className='text-[20px] md:text-[18px] sm:text-[14px] text-[#fff] font-[600]' dangerouslySetInnerHTML={{ __html: dict?.footer?.slogan }}></span>
    </div>

    <div>
      <div className='flex gap-[80px] justify-between md:justify-center sm:justify-center flex-wrap'>
        <div className='flex gap-[80px] md:gap-[50px] sm:gap-[50px] flex-wrap md:justify-center md:text-center sm:justify-start sm:pl-5'>
          <div className='flex md:px-4 sm:px-3 flex-col gap-[10px] cursor-pointer'>{footerListOne?.map(({ name, link }) => (
            <p onClick={() => router.push(link)} className='font-[400] text-[16px] text-[#fff] hover:underline'>{name}</p>
          ))}
          </div>

          <div className='flex md:px-4 sm:px-3 flex-col gap-[10px] cursor-pointer'>{footerListTwo?.map(({ name, link }) => (
            <p onClick={() => router.push(`${lang} / ${link}`)} key={link} className='font-[400] text-[16px] text-[#fff] hover:underline'>{name}</p>
          ))}
          </div>
        </div>

        <div className='flex flex-col justify-between items-center gap-[11px] md:px-4 sm:px-3'>
          <img src='/footer-logo-two.svg' className='w-[100px] h-[100px]' />
          <p className='font-[400] text-[14px] text-[#fff]'>{dict?.footer?.list?.educationalPortal}</p>
          <p className='font-[400] text-[16px] text-[#fff]'>{dict?.footer?.list?.address}</p>
          <p className='font-[400] text-[16px] text-[#fff]'>{dict?.footer?.list?.phone}</p>
        </div>
      </div>
    </div >
  </div >
};

export default Footer;
