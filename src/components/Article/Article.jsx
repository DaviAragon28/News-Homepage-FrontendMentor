import React from 'react'
import ImageRetroPcs from '../../assets/images/image-retro-pcs.jpg'

export const Article = ({ image = ImageRetroPcs, order, title, desc }) => {
  return (
    <article className='flex gap-4 max-w-md md:max-w-[300px] md:gap-2 xl:max-w-[350px] '>
        <img src={image} alt="image" className='w-[100px] md:h-[180px] lg:w-[180px] ' />
        <div className='flex flex-col gap-1 '>
            <p className='text-3xl font-bold text-grayishBlue'>{order}</p>
            <p className='font-extrabold text-lg hover:text-softRed  cursor-pointer'>{title}</p>
            <p className='text-darkGrayishBlue text-[13px] pr-2 md:text-md md:p-0'>{desc}</p>
        </div>
    </article>
  )
}
