import React from 'react'
import { FirstSection } from '../FirstSection/FirstSection'
import { SecondSection } from '../SecondSection/SecondSection'
import { ThirdSection } from '../ThirdSection/ThirdSection'

export const Main = () => {
  return (
    <main className='pt-20 pb-12 px-3 flex flex-col gap-4 md:pb-4  '>
      <div className='flex flex-col gap-4 md:flex-row md:gap-2  md:justify-center '>
        <FirstSection />
        <SecondSection />
      </div>
      <ThirdSection />
    </main>
  )
}
