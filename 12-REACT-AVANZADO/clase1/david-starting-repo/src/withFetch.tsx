import { useState, useEffect } from 'react'

interface withFetchProps<T> {
  data: T[]
  loading: boolean
  color?: string
}

export function withFetch<T>(
  Component: React.ComponentType<withFetchProps<T>>,
  { url, intialValue }: { url: string; intialValue: T[] }
) {
  return function (props: { color?: string }) {
    const [loading, setLoading] = useState(false)

    const [data, setData] = useState<T[]>(intialValue)

    useEffect(() => {
      setLoading(true)
      fetch(url)
        .then((response) => response.json())
        .then((result) => result.data as T[])
        .then((data) => setData(data))
        .finally(() => setLoading(false))
    }, [])

    return <Component {...props} data={data} loading={loading} />
  }
}
