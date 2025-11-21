// components/Header.tsx
//テスト
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-[F9F8F1] text-center">
      <div className="flex justify-center items-center p-10 bg-blue-300 text-xl">
        <p>できることを見つけよう</p>
      </div>
    </header>
  );
};

export default Header;
