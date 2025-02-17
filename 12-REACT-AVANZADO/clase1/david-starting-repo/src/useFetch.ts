import { useState, useEffect } from 'react'

export function useFetch<Data>({
  url,
  initialValue
}: {
  url: string
  initialValue: Data
}) {
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

  return { data, loading }
}
