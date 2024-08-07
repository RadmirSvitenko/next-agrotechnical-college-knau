'use client';

import { useParams } from 'next/navigation';
import React from 'react';

const BlogAndNewsCard = ({ event, dict }) => {
  const { lang } = useParams();

  return (
    <div className="flex cursor-pointer shadow-lg hover:shadow-xl transition-[1s] pt-[24px] pb-[26px] w-[295px] min-h-[375px] tracking-[0.5px] max-h-[375px] flex-col gap-6 px-[10.5px] overflow-hidden">
      <img
        src={event?.image}
        alt={event?.[`title_${lang}`]}
        className="w-full min-h-[158px] h-[158px]"
      />
      <p className="font-[900] overflow-ellipsis truncate text-[22px] text-[#000]">
        {event?.[`title_${lang}`]}
      </p>
      <span className="font-[700] overflow-ellipsis truncate text-[16px] leading-[22px] text-[##B4B4B4]">
        {event?.[`description_${lang}`]}
      </span>
    </div>
  );
};

export default BlogAndNewsCard;
