import React from 'react';
import Lottie from "lottie-react";
import Typewriter from 'typewriter-effect';
import webDevAnimation from './../../../../abi-david/src/assets/Banner/55383-web-development-animation.json'

const Banner = () => {


  

    return (
        <div>
         <div className="bg-base-200 p-10">
  <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-3">
    <div className="w-[300px] lg:w-full">
    <Lottie animationData={webDevAnimation} loop={true} />

    </div>
    
    <div className="w-[300px] lg:w-full flex flex-col justify-center items-center">
      <h1 className="lg:text-5xl text-secondary font-bold"><Typewriter
  options={{
    strings: ['Hello I am ABI', 'A Software Engineer'],
    autoStart: true,
    loop: true,
  }}
/></h1>
      <p className="py-6 lg:text-lg text-sm text-center">A Software Engineer with a passion for creating intuitive web and mobile applications.I have a wide range of technologies and programming languages including C, C++, C#, Javascript ,Html , Css and I am skilled at using these tools. I am a strong problem solverand able to quickly learn new technologies ,programming languages and even Frameworks as needed. In my spare time I love experimenting new technologies,I am always searching for opportunities to grow and learn as a Software Engineer</p>
      
    </div>
  </div>
</div>
        </div>
    );

};

export default Banner;