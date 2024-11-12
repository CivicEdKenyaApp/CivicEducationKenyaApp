import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Civic Education Kenya
          </Link>
          <ul className="flex space-x-4">
            <li><Link href="/legislative-tracker">Legislative Tracker</Link></li>
            <li><Link href="/resources">Resources</Link></li>
            <li><Link href="/community">Community</Link></li>
            <li><Link href="/events">Events</Link></li>
            <li><Link href="/volunteer">Volunteer</Link></li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      <footer className="bg-gray-200 p-4">
        <div className="container mx-auto text-center">
          © 2024 Civic Education Kenya. All rights reserved.
        </div>
      </footer>
    </div>
  )
}