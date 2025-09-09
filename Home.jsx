import { BRAND } from '../lib/brand'
import { motion } from 'framer-motion'

export default function Home(){
  return (
    <div className='p-6 max-w-5xl mx-auto'>
      <motion.h2 initial={{y:10,opacity:0}} animate={{y:0,opacity:1}} className='text-4xl font-bold'>
        {BRAND.tagline}
      </motion.h2>
      <p className='mt-3 text-gray-700'>
        We implement AI chatbots, workflow automation, and content systems that reduce costs and increase revenue.
      </p>
      <div className='mt-6 flex gap-3'>
        <a href='/contact' className='btn-primary px-5 py-3 rounded'>Book a Call</a>
        <a href='/services' className='px-5 py-3 rounded border border-primary text-primary'>Explore Services</a>
      </div>
    </div>
  )
}