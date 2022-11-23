import React from 'react'
import { AllArticles } from '../../Containers/AllArticles'

export const ThirdSection = () => {
  return (
    <section className='pt-8 max-w-md mx-auto flex flex-col gap-8 md:mx-0 md:max-w-none md:flex-row md:justify-evenly md:gap-2 xl:justify-center xl:gap-16'>
        <AllArticles />
    </section>
  )
}
