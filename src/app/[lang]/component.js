'use client';

import MainFormBlock from '@/components/mainFormBlock/component';
import MainInfoBlock from '@/components/mainInfoBlock/component';
import MainNewsBlock from '@/components/mainNewsBlock/component';
import Map from '@/components/map/component';

const MainPage = ({ dict }) => {

  return <div className='w-full h-auto min-h-screen flex flex-col sm:bg-[#F1F3F4]'>
    <MainNewsBlock dict={dict} />
    <MainInfoBlock dict={dict} />
    <MainFormBlock dict={dict} />
    <Map dict={dict} />

  </div>;
};

export default MainPage;
