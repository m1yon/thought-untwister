import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <Input placeholder="Enter text here" className="max-w-sm" />
      <Button>Click me</Button>
    </div>
  )
}

export default App
