import { withFetch } from './withFetch'

interface Team {
  id: number
  full_name: string
}

function Teams({ data: teams, loading }: { data: Team[]; loading: boolean }) {
  if (loading) {
    return 'Loading...'
  }
  return (
    <ul>
      {teams.map((team) => (
        <li key={team.id}>{team.full_name}</li>
      ))}
    </ul>
  )
}

export const TeamswithFetch = withFetch<Team>(Teams, {
  url: 'https://api.balldontlie.io/v1/teams',
  intialValue: []
})
