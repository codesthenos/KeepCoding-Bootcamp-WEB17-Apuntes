import { PlayerswithFetch } from './Players'
import { Players } from './PlayersRenderProps'
import { PlayersWithHook } from './PlayersWithHook'
import { TeamswithFetch } from './Teams'
import { Teams } from './TeamsRenderProps'
import { TeamsWithHook } from './TeamsWithHook'

function App() {
  return (
    <>
      <h1>React patterns</h1>
      <h2>Players</h2>
      <PlayerswithFetch color="blue" />
      <h2>Teams</h2>
      <TeamswithFetch />
      <h2>TEAM RENDER PROPS</h2>
      <Teams />
      <h2>PLAYERS RENDER PROPS</h2>
      <Players color="red" />
      <h2>PLAYERS WITH HOOK</h2>
      <PlayersWithHook color="green" />
      <h2>TEAMS WITH HOOK</h2>
      <TeamsWithHook />
    </>
  )
}

export default App
