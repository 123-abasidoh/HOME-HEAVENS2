import React from 'react'
import { whoWeAre } from '../constants'

const Workflow = () => {
  return (
    <div className='px-[5%] mt-24  overflow-hidden'>
        <div className="flex flex-col items-center justify-center mt-24 pb-auto" id=''>
          <h2 className="text-center text-2xl lg:text-5xl md:text-4xl">
            WHO WE ARE
              </h2>
              {
              <ul className=" text-center lg:text-start  list-disc">
                {whoWeAre.map((items, index) => (
                  <li key={index} className="mt-12 list-stlye">
                    {items.text}
                  </li>
                ))}
              </ul>
            }
        </div>
    </div>
  )
}

export default Workflow