import Footer from "./Footer"
import Header, { type HeaderProps } from "./Header"

interface Props extends HeaderProps {
  title: string
  children: React.ReactNode
}

export default function Layout ({ children, title, ...rest }: Props) {
  return <div>
    <Header {...rest}/>
    <main>
      <h2>
        {title}
      </h2>
      {children}
    </main>
    <Footer />
  </div>
}