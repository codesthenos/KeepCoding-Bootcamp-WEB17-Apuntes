import { useFetch } from './useFetch'

interface Player {
  id: number
  first_name: string
  last_name: string
}

export function PlayersWithHook({ color }: { color: string }) {
  const { data, loading } = useFetch<Player[]>({
    url: 'api/players',
    initialValue: []
  })
  if (loading) {
    return 'Loading...'
  }
  return (
    <ul style={{ color }}>
      {data.map((player) => (
        <li key={player.id}>
          {player.first_name} - {player.last_name}
        </li>
      ))}
    </ul>
  )
}
