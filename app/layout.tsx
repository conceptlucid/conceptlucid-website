export const metadata = {
  title: 'ConceptLucid - Building the Future of AI',
  description: 'Building the future of AI assistants.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
