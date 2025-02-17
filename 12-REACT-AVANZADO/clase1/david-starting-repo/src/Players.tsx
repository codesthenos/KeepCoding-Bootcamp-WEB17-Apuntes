import { useEffect, useState } from 'react'

interface Player {
  id: number
  first_name: string
  last_name: string
}

export default function Players() {
  const [player, setPlayers] = useState<Player[]>([])

  useEffect(() => {
    fetch('https://api.balldontlie.io/v1/players', {
      headers: {
        Authorization: import.meta.env.VITE_API_KEY
      }
    })
      .then((response) => response.json())
      .then((result) => result.data as Player[])
      .then((player) => setPlayers(player))
  })

  return (
    <ul>
      {player.map((player) => (
        <li key={player.id}>
          {player.first_name} - {player.last_name}
        </li>
      ))}
    </ul>
  )
}
