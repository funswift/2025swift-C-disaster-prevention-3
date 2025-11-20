"use client";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { useRouter } from 'next/navigation';

export default () => {

    const router = useRouter();
    let cardNo = 0;

    function chooseCard(num :number){

      /* ここをデータベースへの保存に改良可能 */
      try{
        localStorage.setItem("FoodStockCard", String(num));
      } catch(e){
        console.warn("Error setting localStorage key FoodStockCard:", e);
      }

      router.push("/");


    }
  return (
    <>

    <div className='relative h-180 mt-10'>{/* この上に要素を配置する */}
      <Swiper
      className='absolute'
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={(swiper) => {cardNo = swiper.activeIndex +1; console.log('slide: '+cardNo);}}
      onSwiper={(swiper) => {cardNo = swiper.activeIndex +1; console.log('slide: '+cardNo);}}
      centeredSlides={true}
      >
      <SwiperSlide style={{ width: 'auto' }}>
        <div className='mx-auto w-120 h-150 p-10 bg-blue-200 text-center'>
          Slide 1
        </div>
      </SwiperSlide>

      <SwiperSlide style={{ width: 'auto' }}>
        <div className='mx-auto w-120 h-150 p-10 bg-green-200 text-center'>
          Slide 2
        </div>
      </SwiperSlide>

      <SwiperSlide style={{ width: 'auto' }}>
        <div className='mx-auto w-120 h-150 p-10 bg-rose-200 text-center'>
          Slide 3
        </div>
      </SwiperSlide>

      <SwiperSlide style={{ width: 'auto' }}>
        <div className='mx-auto w-120 h-150 p-10 bg-orange-200 text-center'>
          Slide 4
        </div>
      </SwiperSlide>
      
      </Swiper>

      <button className='z-10 absolute bottom-0 right-20 h-50 w-50 m-10 text-xl text-white rounded-full bg-slate-400'
              onClick={() => chooseCard(cardNo)}
      >
        できそう
      </button>

    </div>

    <div className='relative h-100'>
      <p className='absolute left-1/2 text-xl'>aaaa</p>
    </div>

    

    

    </>
  );
};