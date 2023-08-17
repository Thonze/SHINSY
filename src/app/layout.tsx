import './globals.css'

export const metadata = {
  title: 'WELCOME TO SHINSY',
  description: 'ASSISTING YOUR MENTAL HEALTH WITH OUR BEST SERVICES',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
