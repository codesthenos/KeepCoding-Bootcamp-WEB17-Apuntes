import { useState, useEffect } from 'react'

interface withFetchProps<Data> {
  data: Data
  loading: boolean
}

export function withFetch<
  Data,
  Props extends withFetchProps<Data> = withFetchProps<Data>
>(
  Component: React.ComponentType<Props>,
  { url, intialValue }: { url: string; intialValue: Data }
) {
  return function (props: Omit<Props, keyof withFetchProps<Data>>) {
    const [loading, setLoading] = useState(false)

    const [data, setData] = useState<Data>(intialValue)

    useEffect(() => {
      setLoading(true)
      fetch(url)
        .then((response) => response.json())
        .then((result) => result.data)
        .then((data) => setData(data))
        .finally(() => setLoading(false))
    }, [])

    return <Component {...(props as Props)} data={data} loading={loading} />
  }
}
