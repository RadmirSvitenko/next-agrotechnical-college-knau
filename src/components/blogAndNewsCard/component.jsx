import React from 'react';

const BlogAndNewsCard = ({ event }) => {
  return (
    <div className="flex shadow-lg pt-[24px] pb-[26px] w-[295px] min-h-[375px] tracking-[0.5px] max-h-[375px] flex-col gap-6 px-[10.5px] overflow-hidden">
      <img
        src={event?.image}
        alt={event?.title}
        className="w-full min-h-[158px] h-[158px]"
      />
      <p className="font-[900] overflow-ellipsis text-[22px] text-[#000]">
        {event?.title}
      </p>
      <p className="font-[700] overflow-ellipsis text-[16px] leading-[22px] text-[##B4B4B4]">
        {event?.description}
      </p>
    </div>
  );
};

export default BlogAndNewsCard;
