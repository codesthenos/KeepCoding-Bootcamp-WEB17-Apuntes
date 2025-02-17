import { PlayerswithFetch } from './Players'
import { Players } from './PlayersRenderProps'
import { TeamswithFetch } from './Teams'
import { Teams } from './TeamsRenderProps'

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
    </>
  )
}

export default App
