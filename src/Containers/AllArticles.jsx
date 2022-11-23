import React from 'react'
import { Article } from '../components/Article/Article'
import ImageTopLaptops from '../assets/images/image-top-laptops.jpg'
import ImageGamingGrowth from '../assets/images/image-gaming-growth.jpg'



export const AllArticles = () => {
  return (
    <>
      <Article
        order='01'
        title='Reviving Retro PCs'
        desc='What happens when old PCs are given modern upgrades?'
      />
      <Article
        image={ImageTopLaptops}
        order='02'
        title='Top 10 Laptops of 2022'
        desc='Our best picks for various needs and budgets.'
      />
      <Article 
        image={ImageGamingGrowth}
        order='03'
        title='The Growth of Gaming'
        desc='How the pandemic has sparked fresh opportunities'
      />
    </>
  )
}
