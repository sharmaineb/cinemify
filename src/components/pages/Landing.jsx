import React from 'react';
import LandingContent from '../LandingContent';

const Landing = () => {
  return (
    <div>
      <div className="flex min-h-screen items-center justify-center bg-[#f1f1f1] p-10">
      <div className="w-max">
        <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-black font-bold">Cinemify.</h1>
      </div>
      </div>
      <LandingContent />
    </div>
  );
};

export default Landing;

