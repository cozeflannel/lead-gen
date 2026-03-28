import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SparkleWash Pro — Pressure Washing Matthews & Charlotte NC',
  description: 'Professional pressure washing and exterior cleaning services in Matthews, Charlotte and surrounding areas. House washing, driveway cleaning, deck restoration and more.',
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💧</text></svg>",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased text-slate-800 bg-white">
        {children}
      </body>
    </html>
  )
}
