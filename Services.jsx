export default function Services(){
  const items = [
    { title: 'AI Chatbots', desc: '24/7 lead capture and support with CRM handoff.' },
    { title: 'Workflow Automation', desc: 'Automate repetitive tasks across tools.' },
    { title: 'AI Content Systems', desc: 'SEO briefs, drafts, and approvals.' },
    { title: 'CRM Integration', desc: 'Pipe leads into your CRM and sequence.' },
    { title: 'Sales Funnel Automation', desc: 'Qualify, nurture, and book qualified calls.' },
  ]
  return (
    <div className='p-6 max-w-5xl mx-auto'>
      <h2 className='text-2xl font-bold'>Our Services</h2>
      <div className='grid md:grid-cols-2 gap-4 mt-4'>
        {items.map((it,i)=>(
          <div key={i} className='border rounded p-4'>
            <h3 className='font-semibold'>{it.title}</h3>
            <p className='text-sm text-gray-700'>{it.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}