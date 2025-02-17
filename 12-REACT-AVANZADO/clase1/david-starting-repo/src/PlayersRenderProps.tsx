import Fetch from './Fetch'

interface Player {
  id: number
  first_name: string
  last_name: string
}

export function Players({ color }: { color: string }) {
  return (
    <Fetch<Player[]>
      url="https://api.balldontlie.io/v1/players"
      initialValue={[]}
      children={({ data, loading }) => {
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
      }}
    />
  )
}
