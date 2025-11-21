// components/Header.tsx
//テスト
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <main>
      <header className="bg-[F9F8F1] text-center">
        <div>
          <Link href="/"
            className="flex justify-center items-center p-10 bg-blue-300 text-xl"
          >
            アプリケーション名 できることを見つけよう
          </Link>
        </div>
      </header>
    </main>
  );
};

export default Header;
