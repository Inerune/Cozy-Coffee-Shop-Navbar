import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Coffee } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="bg-amber-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="#" className="flex items-center space-x-2 text-2xl font-bold">
          <Coffee className="h-6 w-6" />
          <span>Cozy Coffee</span>
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="#" className="hover:text-amber-200 transition-colors">Home</Link>
          <Link href="#menu" className="hover:text-amber-200 transition-colors">Menu</Link>
          <Link href="#about" className="hover:text-amber-200 transition-colors">About</Link>
          <Link href="#contact" className="hover:text-amber-200 transition-colors">Contact</Link>
        </div>
        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-amber-800 md:hidden">
          Menu
        </Button>
      </div>
    </nav>
  )
}
