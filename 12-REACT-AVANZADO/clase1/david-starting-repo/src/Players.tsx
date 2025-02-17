import { withFetch } from './withFetch'

interface Player {
  id: number
  first_name: string
  last_name: string
}

function Players({
  data: players,
  loading,
  color
}: {
  data: Player[]
  loading: boolean
  color?: string
}) {
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

export const PlayerswithFetch = withFetch<Player>(Players, {
  url: 'https://api.balldontlie.io/v1/players',
  intialValue: []
})
