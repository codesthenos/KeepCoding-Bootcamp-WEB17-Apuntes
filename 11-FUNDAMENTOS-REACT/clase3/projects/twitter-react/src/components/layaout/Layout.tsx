import Footer from "./Footer"
import Header from "./Header"

interface Props {
  title: string
  children: React.ReactNode
}

export default function Layout ({ children, title }: Props) {
  return <div>
    <Header />
    <main>
      <h2>
        {title}
      </h2>
      {children}
    </main>
    <Footer />
  </div>
}