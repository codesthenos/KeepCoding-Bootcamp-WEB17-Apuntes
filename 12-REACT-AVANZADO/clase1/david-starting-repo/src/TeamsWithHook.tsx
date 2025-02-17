import { useFetch } from './useFetch'

interface Team {
  id: number
  full_name: string
}

export function TeamsWithHook() {
  const { data, loading } = useFetch<Team[]>({
    url: 'api/teams',
    initialValue: []
  })

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
}
