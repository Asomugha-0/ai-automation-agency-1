import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { loadAllPosts } from '../lib/markdown'

export default function Blog(){
  const [posts, setPosts] = useState([])
  useEffect(()=>{ loadAllPosts().then(setPosts) },[])
  return (
    <div className='p-6 max-w-4xl mx-auto'>
      <h2 className='text-2xl font-bold mb-4'>Blog</h2>
      <div className='space-y-6'>
        {posts.map(p => (
          <article key={p.slug} className='border-b pb-4'>
            <h3 className='text-xl font-semibold'><Link to={`/blog/${p.slug}`}>{p.title}</Link></h3>
            <p className='text-sm text-gray-600'>{p.date}</p>
            <p className='mt-2'>{p.description}</p>
            <Link className='text-primary mt-2 inline-block' to={`/blog/${p.slug}`}>Read more →</Link>
          </article>
        ))}
      </div>
    </div>
  )
}