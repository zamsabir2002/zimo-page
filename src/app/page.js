
import { Inter } from 'next/font/google'
import NavBar from '@/components/navbar'
import bg from '../assets/background.png'
import MidContent from '@/components/midcontent'
import EndContent from '@/components/endcontent'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div
      className='h-[100vh] w-full bg-no-repeat bg-cover text-white flex flex-col items-center justify-between px-6 pt-9'
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        position: "relative"
      }}
    >
      <NavBar />
      <MidContent />
      <EndContent />
    </div>
  )
}
