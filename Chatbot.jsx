import { useEffect } from 'react'
export default function Chatbot(){
  useEffect(()=>{
    const script = document.createElement('script')
    script.src = '//code.tidio.co/YOUR_PUBLIC_KEY.js'
    script.async = true
    document.body.appendChild(script)
  },[])
  return null
}
