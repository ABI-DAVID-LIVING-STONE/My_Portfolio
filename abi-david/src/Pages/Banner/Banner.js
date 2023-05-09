import React from 'react';

const Banner = () => {
    return (
        <div>
         <div className="bg-base-200 p-10">
  <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-3">
    <div className="w-[300px] lg:w-full">
    <img 
    src="https://placeimg.com/260/400/arch" className="rounded-lg shadow-2xl" 
    alt=''
    />

    </div>
    
    <div className="w-[300px] lg:w-full flex flex-col justify-center items-center">
      <h1 className="lg:text-5xl text-secondary font-bold">[ABI] DAVID LIVING~STONE</h1>
      <p className="py-6 lg:text-lg text-sm text-center">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      
    </div>
  </div>
</div>
        </div>
    );

};

export default Banner;