import Link from 'next/link';
import styles from './styles.module.css';
import React from "react";

export default function Home() {
  return (
    //wbr 改行可能ポイント br 強制改行
<main>
    <div className="text-center mt-30 mb-150 p-8">
        {/* buttonの代わりにLinkコンポーネントを使用し、同じクラスを指定 */}
        <Link href="/pages/choosecard/" 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 bg-slate-400 text-white text-6xl px-16 py-8 rounded-md text-lg"
        >
          はじめる
        </Link>
      </div>
</main>    
  );
}
