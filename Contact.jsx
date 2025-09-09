export default function Contact(){
  return (
    <div className='p-6 max-w-3xl mx-auto'>
      <h2 className='text-2xl font-bold'>Contact Us</h2>
      <form className='space-y-4 max-w-md' action='https://formspree.io/f/YOUR_FORM_ID' method='POST'>
        <input className='w-full p-2 border rounded' type='text' name='name' placeholder='Your Name' required />
        <input className='w-full p-2 border rounded' type='email' name='email' placeholder='Your Email' required />
        <textarea className='w-full p-2 border rounded' name='message' placeholder='Your Message'></textarea>
        <button className='btn-primary px-4 py-2 rounded' type='submit'>Send</button>
      </form>
    </div>
  )
}