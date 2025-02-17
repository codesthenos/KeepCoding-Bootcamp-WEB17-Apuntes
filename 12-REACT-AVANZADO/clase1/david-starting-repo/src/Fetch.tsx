import { useState, useEffect } from 'react'

interface FetchProps {
  url: string
  initialValue: any
  children: ({
    data,
    loading
  }: {
    data: any
    loading: boolean
  }) => React.ReactNode
}

export default function Fetch({ url, initialValue, children }: FetchProps) {
  const [loading, setLoading] = useState(false)

  const [data, setData] = useState(initialValue)

  useEffect(() => {
    setLoading(true)
    fetch(url, {
      headers: {
        Authorization: import.meta.env.VITE_API_KEY
      }
    })
      .then((response) => response.json())
      .then((result) => result.data as T[])
      .then((data) => setData(data))
      .finally(() => setLoading(false))
  }, [url])

  return children({ data, loading })
}
