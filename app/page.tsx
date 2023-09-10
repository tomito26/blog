import Image from 'next/image'
import Posts from './components/Posts'

export default function Home() {
  return (
    <main className="px-6 mx-auto">
    <p className='mt-12 mb-12 text-3xl text-center text-white'>
      Hello and Welcome &#128075;&nbsp;
      <span className='white-space-nowrap'>
        I&apos;m <span className='font-bold'>Thomas</span>.
      </span>
    </p>
    <Posts/>
    </main>
  )
}
