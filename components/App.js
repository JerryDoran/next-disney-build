import Slider from './Slider'
import Brands from './Brands'

function App() {
  return (
    <main className="relative min-h-screen after:absolute after:inset-0 after:z-[-1] after:bg-home after:bg-cover after:bg-fixed after:bg-center after:bg-no-repeat">
      <Slider />
      <Brands />
    </main>
  )
}

export default App
