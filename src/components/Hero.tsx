import { SelectedPage } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import React from 'react'

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Hero = ({ setSelectedPage }: Props) => {

  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")

  return (
    <section id="hero" className="flex gap-16 py-10 md:h-full md:pb-0">
      <div>
        </div>



      <div className="bg-gray-100 basis-2/3 p-2 pt-1 "> {/*LEFT */}
        <div className="mt-4 relative flex justify-start items-center bg-gray-500 rounded-3xl px-4 py-2 w-fit text-white">
          <div className="absolute bg-violet-400 w-10 h-4/5 ml-1 rounded-xl z-1"></div>
          <span className="z-10">The Best Fitness club in the town</span>
        </div>
        {/*Hero Heading */}
        <div className="flex flex-col gap-4 text-white ">
          <div className="text-5xl uppercase font-bold">
            <h1 className="">Shape Your</h1>
            <h1 className="">Ideal Body</h1>

          </div>

          <p className="text-lg">We will help you shape and build your ideal body </p>
        </div>
        {/* Figures */}
        <div className="flex gap-2">
          <div className="flex flex-col">
            <span className="text-white text-xl">+140</span>
            <span className="text-gray-600 uppercase">expert coaches</span>
          </div>
          <div className= "flex flex-col">
            <span>+50</span>
            <span>fitness programs</span>
          </div>
          <div className= "flex flex-col">
            <span>+976</span>
            <span>members joined</span>
          </div>
        </div>
        {/* buttons */}
        <div className="">
          <button className= "flex items-center justify-center bg-white p-1 font-bold cursor:pointer" >Join Now</button>
          <button>Learn More</button>
        </div>
      </div>

      <div className="flex-1 bg-pink-200"> {/*RIGHT */} 
      <div className="flex flex-col bg-gray-400 w-fit align-start ">
        <span className="text-sm">Heart Rate</span>
      <span>116 bpm</span>
      </div>
      
      
      </div>
    
    </section>
  )
}

export default Hero