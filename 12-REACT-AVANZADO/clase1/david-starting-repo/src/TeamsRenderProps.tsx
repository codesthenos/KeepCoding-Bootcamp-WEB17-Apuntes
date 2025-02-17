import Fetch from './Fetch'

interface Team {
  id: number
  full_name: string
}

export function Teams() {
  return (
    <Fetch<Team[]> url="https://api.balldontlie.io/v1/teams" initialValue={[]}>
      {({ data, loading }) => {
        if (loading) {
          return 'Loading...'
        }
        return (
          <ul>
            {data.map((team) => (
              <li key={team.id}>{team.full_name}</li>
            ))}
          </ul>
        )
      }}
    </Fetch>
  )
}
