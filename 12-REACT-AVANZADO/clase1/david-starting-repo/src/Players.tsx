import { withFetch } from './withFetch'

interface Player {
  id: number
  first_name: string
  last_name: string
}

interface PlayerProps {
  data: Player[]
  loading: boolean
  color: string
}

function Players({ data: players, loading, color }: PlayerProps) {
  if (loading) {
    return 'Loading...'
  }
  return (
    <ul style={{ color }}>
      {players.map((player) => (
        <li key={player.id}>
          {player.first_name} - {player.last_name}
        </li>
      ))}
    </ul>
  )
}

export const PlayerswithFetch = withFetch<Player[], PlayerProps>(Players, {
  url: 'api/players',
  intialValue: []
})
