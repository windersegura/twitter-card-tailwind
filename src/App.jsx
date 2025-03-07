
import { Card } from './components/Card/Card'

function App() {

  return (
    <div className="flex flex-col space-y-3 bg-sky-300 h-screen items-center justify-center">
      <Card username='kikobeats'/>
      <Card username='midudev'/>
      <Card username='SleamsDev'/>
    </div>
  )
}

export default App
