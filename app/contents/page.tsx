"use client";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default () => {
  return (
    <>
    <div className='p-10 text-center text-xl'>aaa</div>

    <Swiper
    spaceBetween={50}
    slidesPerView={1}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
    centeredSlides={true}
  >
    {/* mx-auto:自動水平マージン */}
    <SwiperSlide style={{ width: 'auto' }}>
      <div className='mx-auto w-[360px] h-[420px] p-10 bg-blue-200 text-center'>Slide 1</div>
    </SwiperSlide>

    <SwiperSlide style={{ width: 'auto' }}>
      <div className='mx-auto w-[360px] h-[420px] p-10 bg-green-200 text-center'>Slide 2</div>
    </SwiperSlide>

    <SwiperSlide style={{ width: 'auto' }}>
      <div className='mx-auto w-[360px] h-[420px] p-10 bg-rose-200 text-center'>Slide 3</div>
    </SwiperSlide>

    <SwiperSlide style={{ width: 'auto' }}>
      <div className='mx-auto w-[360px] h-[420px] p-10 bg-orange-200 text-center'>Slide 4</div>
    </SwiperSlide>
    
    
    </Swiper>

    <div className='p-10 text-center text-xl'>bbb</div>

    

    </>
  );
};