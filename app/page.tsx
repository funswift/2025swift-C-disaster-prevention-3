"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [cards, setCards] = useState("0");
  let cardClass, cardMessage;

  /* ここをデータベースからの読み込みに変更可能 */
  /* ただし、ローカルストレージでも、たいてい前回選んだカードが表示されるはず */
  useEffect(() => {
     console.log("localStorage:", localStorage.getItem("FoodStockCard"));
    if(localStorage.hasOwnProperty("FoodStockCard")){
      try{
        setCards(localStorage.getItem("FoodStockCard") || "");
      }catch(e){
        console.warn("Error getting localStorage key FoodStockCard:", e);
      }
    }
  }, []);

  /* 一旦カードのクラスを変える実装にしています */
  if(Number(cards) == 0){
    cardClass = 'absolute left-10 w-120 h-150 p-10 bg-white text-center';
    cardMessage = "防災のためにできることを見つけよう";
  }
  if(Number(cards) == 1){
    cardClass = 'absolute left-10 w-120 h-150 p-10 bg-blue-200 text-center';
    cardMessage = 'Slide 1';
  }
  if(Number(cards) == 2){
    cardClass = 'absolute left-10 w-120 h-150 p-10 bg-green-200 text-center';
    cardMessage = 'Slide 2';
  }
  if(Number(cards) == 3){
    cardClass = 'absolute left-10 w-120 h-150 p-10 bg-rose-200 text-center';
    cardMessage = 'Slide 3';
  }
  if(Number(cards) == 4){
    cardClass = 'absolute left-10 w-120 h-150 p-10 bg-orange-200 text-center';
    cardMessage = 'Slide 4';
  }
  
  return (
    <>
    

    <div className='relative h-180 mt-10'>

      <div className = {cardClass}>
        {cardMessage}
      </div>
      <Link className="absolute top-130 left-150 bg-slate-400 text-white p-5 rounded-md text-lg" href="/contents">
      カードを選ぶ
      </Link>

    </div>
    
    
    </>
  );
}
