import { useState, useEffect } from 'react'

export function withFetch<T>(
  Component: React.ComponentType<{ data: T[] }>,
  { url, intialValue }: { url: string; intialValue: T[] }
) {
  return function () {
    const [data, setData] = useState<T[]>(intialValue)

    useEffect(() => {
      fetch(url, {
        headers: {
          Authorization: import.meta.env.VITE_API_KEY
        }
      })
        .then((response) => response.json())
        .then((result) => result.data as T[])
        .then((data) => setData(data))
    })

    return <Component data={data} />
  }
}
