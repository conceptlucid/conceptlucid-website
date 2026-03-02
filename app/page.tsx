import Link from 'next/link'

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', background: '#0a0a0a', color: '#fff', fontFamily: 'system-ui' }}>
      {/* Hero */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '40px 20px', background: 'radial-gradient(ellipse at top, #1a1a3e 0%, #0a0a0a 70%)' }}>
        <h1 style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', fontWeight: '800', marginBottom: '20px' }}>
          concept<span style={{ color: '#00d4ff' }}>lucid</span>
        </h1>
        
        <p style={{ fontSize: '1.4rem', color: '#888', marginBottom: '50px', maxWidth: '500px' }}>
          Building the future of AI assistants.
        </p>

        {/* CTA */}
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="https://myhyperbot.com" style={{ padding: '18px 40px', background: '#00d4ff', color: '#000', borderRadius: '14px', fontWeight: '600', textDecoration: 'none', fontSize: '1.1rem' }}>
            Try HyperBot →
          </Link>
          <a href="https://github.com/conceptlucid" style={{ padding: '18px 40px', background: 'transparent', border: '1px solid #333', color: '#fff', borderRadius: '14px', textDecoration: 'none', fontSize: '1.1rem' }}>
            GitHub →
          </a>
        </div>
      </section>

      {/* Products */}
      <section style={{ padding: '80px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '40px', textAlign: 'center' }}>Our Products</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {/* HyperBot */}
          <div style={{ background: '#111', padding: '40px', borderRadius: '20px', border: '1px solid #222' }}>
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🤖</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>HyperBot</h3>
            <p style={{ color: '#888', marginBottom: '20px' }}>
              Your personal AI that works on your computer. Just chat — it handles the rest.
            </p>
            <a href="https://myhyperbot.com" style={{ color: '#00d4ff', textDecoration: 'none' }}>Try it →</a>
          </div>

          {/* More coming soon */}
          <div style={{ background: '#111', padding: '40px', borderRadius: '20px', border: '1px solid #222', opacity: 0.6 }}>
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🚀</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>More Coming Soon</h3>
            <p style={{ color: '#888', marginBottom: '20px' }}>
              We're building the next generation of AI tools. Stay tuned!
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '60px 40px', textAlign: 'center', color: '#444', borderTop: '1px solid #111' }}>
        <p style={{ marginBottom: '20px' }}>© 2026 ConceptLucid. All rights reserved.</p>
        <div style={{ display: 'flex', gap: '30px', justifyContent: 'center' }}>
          <a href="https://github.com/conceptlucid" style={{ color: '#666', textDecoration: 'none' }}>GitHub</a>
          <a href="https://twitter.com" style={{ color: '#666', textDecoration: 'none' }}>Twitter</a>
          <a href="mailto:hello@conceptlucid.com" style={{ color: '#666', textDecoration: 'none' }}>Contact</a>
        </div>
      </footer>
    </main>
  )
}
