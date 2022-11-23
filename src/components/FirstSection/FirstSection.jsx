import React from 'react'
import ImageWeb3Mobile from '../../assets/images/image-web-3-mobile.jpg'
import ImageWeb3Desktop from '../../assets/images/image-web-3-desktop.jpg'

export const FirstSection = () => {
    return (
        <section className='flex flex-col gap-4 pb-10 max-w-md mx-auto md:mx-0 md:pb-0  md:gap-10 lg:w-1/2 lg:max-w-none lg:gap-6'>
            <div>
                <img src={ImageWeb3Mobile} alt="" className='md:hidden' />
                <img src={ImageWeb3Desktop} alt="" className='hidden md:block md:h-[230px] w-full' />
            </div>
            <div className='flex flex-col gap-2 md:flex-row xl:gap-10'>
                <h1 className='text-4xl font-extrabold pr-14 md:p-0 md:w-5/12 xl:text-5xl xl:pr-10 xl:w-5/12'>The Bright Future of Web 3.0?</h1>
                <div className='flex flex-col gap-5 md:w-1/2 md:flex-1 md:pr-2 xl:pr-4'>
                    <p className='text-darkGrayishBlue text-sm '>
                        We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                        But is it really fulfilling its promise?
                    </p>
                    <button className='bg-softRed py-2 px-5 text-offWhite w-max text-[13px] tracking-widest font-bold hover:bg-veryDarkBlue'>READ MORE</button>
                </div>
            </div>
        </section>
    )
}
