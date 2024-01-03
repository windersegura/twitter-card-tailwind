
import { Card } from './components/Card/Card'

function App() {

  return (
    <div className="flex flex-col space-y-3 bg-slate-300 max-w-screen-lg h-screen items-center justify-center">
      <Card username='kikobeats'/>
      <Card username='midudev'/>
      <Card username='SleamsDev'/>
    </div>
  )
}

export default App
