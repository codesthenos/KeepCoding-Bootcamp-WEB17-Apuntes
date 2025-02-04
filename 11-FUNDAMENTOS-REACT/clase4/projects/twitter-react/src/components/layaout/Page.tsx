interface Props {
  title: string
  children: React.ReactNode
}

export default function Layout({ children, title }: Props) {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  )
}
