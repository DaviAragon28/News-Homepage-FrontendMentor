import React from 'react'

export const Links = ({ styles }) => {
    return (
        <ul className={`flex flex-col gap-2 text-veryDarkBlue  ${styles} font-semibold md:text-darkGrayishBlue md:flex-row md:gap-5 md:font-normal md:text-[16px] md:flex `}>
            <li className='hover:text-softRed cursor-pointer'>Home</li>
            <li className='hover:text-softRed cursor-pointer'>New</li>
            <li className='hover:text-softRed cursor-pointer'>Popular</li>
            <li className='hover:text-softRed cursor-pointer'>Trending</li>
            <li className='hover:text-softRed cursor-pointer'>Categories</li>
        </ul>
    )
}
