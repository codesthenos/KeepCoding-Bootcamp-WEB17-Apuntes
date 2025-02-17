import { PlayerswithFetch } from './Players'
import { TeamswithFetch } from './Teams'

function App() {
  return (
    <>
      <h1>React patterns</h1>
      <h2>Players</h2>
      <PlayerswithFetch color="blue" />
      <h2>Teams</h2>
      <TeamswithFetch />
    </>
  )
}

export default App
