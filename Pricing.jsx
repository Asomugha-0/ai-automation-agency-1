export default function Pricing(){
  const plans = [
    { name:'Starter', price:'$999 setup', features:['1 chatbot','Basic automation','Email support']},
    { name:'Growth', price:'$1500 / month', features:['2 chatbots','5 workflows','Priority support']},
    { name:'Premium', price:'$3000 / month', features:['Custom bots','Unlimited workflows','Dedicated success manager']},
  ]
  return (
    <div className='p-6 max-w-5xl mx-auto'>
      <h2 className='text-2xl font-bold'>Pricing</h2>
      <div className='grid md:grid-cols-3 gap-4 mt-4'>
        {plans.map((p,i)=>(
          <div key={i} className='border rounded p-4'>
            <h3 className='font-semibold text-primary'>{p.name}</h3>
            <p className='text-lg'>{p.price}</p>
            <ul className='text-sm mt-2 list-disc ml-5'>
              {p.features.map((f,idx)=><li key={idx}>{f}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}