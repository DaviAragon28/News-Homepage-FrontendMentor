import React from 'react'

export const SecondSection = () => {
  return (
    <section className='bg-veryDarkBlue flex flex-col gap-5 text-offWhite pb-8 pt-4 px-4 max-w-md mx-auto md:mx-0 lg:flex-1'>
        <h2 className='text-softOrange font-bold text-2xl'>New</h2>
        <div className='flex flex-col '>
            <div className='border-b border-grayishBlue pb-6 '>
                <p className='font-bold text-lg hover:text-softOrange w-max cursor-pointer'>Hydrogen VS Electric Cars</p>
                <p className='text-sm text-grayishBlue pr-8'>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>
            <div className='border-b border-grayishBlue py-6 '>
                <p className='font-bold text-lg hover:text-softOrange w-max cursor-pointer'>The Downsides of AI Artistry</p>
                <p className='text-sm text-grayishBlue pr-8'>What are the possible adverse effects of on-demand AI image generation?</p>
            </div>
            <div className=' pt-6'>
                <p className='font-bold text-lg hover:text-softOrange w-max cursor-pointer'>Is VC Funding Drying Up?</p>
                <p className='text-sm text-grayishBlue pr-8'>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </div>
        </div>
    </section>
  )
}
