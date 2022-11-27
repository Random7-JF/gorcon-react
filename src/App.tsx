import './App.css'
import Kick from './components/kick-component'
import Message from './components/message-components'
import PlayersList from './components/players-components'

function App() {

  return (
    <div className="App">
      <p>React</p>
      <Message />
      <PlayersList />
      <Kick />
    </div>
  )
}

export default App
