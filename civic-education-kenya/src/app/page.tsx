import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Welcome to Civic Education Kenya</h1>
      <p className="text-xl">Empowering Kenyans through civic education and engagement.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link href="/legislative-tracker">
          <Button className="w-full">Legislative Tracker</Button>
        </Link>
        <Link href="/resources">
          <Button className="w-full">Resource Hub</Button>
        </Link>
        <Link href="/community">
          <Button className="w-full">Community Portal</Button>
        </Link>
        <Link href="/events">
          <Button className="w-full">Events Platform</Button>
        </Link>
        <Link href="/volunteer">
          <Button className="w-full">Volunteer Opportunities</Button>
        </Link>
      </div>
    </div>
  )
}