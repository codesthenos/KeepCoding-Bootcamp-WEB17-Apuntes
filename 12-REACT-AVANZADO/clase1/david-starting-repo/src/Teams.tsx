import { withFetch } from './withFetch'

interface Team {
  id: number
  full_name: string
}

interface TeamProps {
  data: Team[]
  loading: boolean
}

function Teams({ data: teams, loading }: TeamProps) {
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

export const TeamswithFetch = withFetch<Team[], TeamProps>(Teams, {
  url: 'api/teams',
  intialValue: []
})
