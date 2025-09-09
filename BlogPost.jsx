import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { loadPost } from '../lib/markdown'

export default function BlogPost(){
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  useEffect(()=>{ loadPost(slug).then(setPost) },[slug])
  if (!post) return <div className='p-6'>Loading...</div>
  document.title = `${post.title} | Nova Automations`
  const meta = document.querySelector('meta[name="description"]')
  if (meta) meta.setAttribute('content', post.description || '')
  return (
    <div className='p-6 max-w-3xl mx-auto'>
      <h1 className='text-3xl font-bold'>{post.title}</h1>
      <p className='text-sm text-gray-600 mb-6'>{post.date}</p>
      <div className='prose' dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}