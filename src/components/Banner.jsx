import React from "react";

export default function Banner() {
  return (
    <section className="h-[90vh] relative overflow-hidden">
      <div className="w-full h-full bg-banner bg-cover bg-no-repeat" />
      <div className="absolute w-full top-60 left-6 text-left text-white drop-shadow-2xl">
        <h2 className="text-5xl mb-10">Longines Legend Diver</h2>
        <p className="text-xl">나만의 속도로 삶의 예술에 빠져보세요.</p>
      </div>
    </section>
  );
}
