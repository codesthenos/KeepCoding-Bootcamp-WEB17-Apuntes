import { useState, useEffect } from 'react'

interface FetchProps<Data> {
  url: string
  initialValue: Data
  children: ({
    data,
    loading
  }: {
    data: Data
    loading: boolean
  }) => React.ReactNode
}

export default function Fetch<Data>({
  url,
  initialValue,
  children
}: FetchProps<Data>) {
  const [loading, setLoading] = useState(false)

  const [data, setData] = useState(initialValue)

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then((response) => response.json())
      .then((result) => result.data)
      .then((data) => setData(data))
      .finally(() => setLoading(false))
  }, [url])

  return children({ data, loading })
}
