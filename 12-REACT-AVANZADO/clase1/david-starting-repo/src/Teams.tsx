import { useEffect, useState } from 'react'

interface Team {
  id: number
  full_name: string
}

export default function Teams() {
  const [teams, setTeams] = useState<Team[]>([])

  useEffect(() => {
    fetch('https://api.balldontlie.io/v1/teams', {
      headers: {
        Authorization: import.meta.env.VITE_API_KEY
      }
    })
      .then((response) => response.json())
      .then((result) => result.data as Team[])
      .then((teams) => setTeams(teams))
  })

  return (
    <ul>
      {teams.map((team) => (
        <li key={team.id}>{team.full_name}</li>
      ))}
    </ul>
  )
}
