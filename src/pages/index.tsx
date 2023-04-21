import Image from 'next/image'
import { Inter } from 'next/font/google'
import OnboardingForm from '@/onboarding-form'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <div className='bg-white mb-10'>
    <OnboardingForm />
  </div>
  )
}
