import Link from "next/link"

function contactPage() {
  return (
    <div>
      <h1 className='text-7xl'>contact Page</h1>
      <Link href="/" className='text-xl text-blue-500 inline-block mt-8'> Back home</Link>
     
    </div>
  )
}

export default contactPage