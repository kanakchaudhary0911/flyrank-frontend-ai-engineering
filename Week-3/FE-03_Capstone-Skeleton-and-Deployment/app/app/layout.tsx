import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Kanak Chaudhary | Backend & AI Developer",
  description: "Professional developer portfolio showcasing backend, AI, and web development projects."
};
const navItems = [["Home","/"],["Projects","/projects"],["About","/about"],["Contact","/contact"],["Health","/health"]];
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>
    <header className="site-header"><nav className="navbar" aria-label="Primary navigation">
      <a href="/" className="logo">KC<span>.</span></a>
      <div className="nav-links">{navItems.map(([label,href])=><a key={href} href={href}>{label}</a>)}</div>
    </nav></header>
    <main>{children}</main>
    <footer className="footer"><span>© 2026 Kanak Chaudhary</span><span>Built with Next.js · TypeScript</span></footer>
  </body></html>;
}