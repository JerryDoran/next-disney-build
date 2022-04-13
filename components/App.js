import Slider from './Slider'
import Brands from './Brands'
import MoviesCollection from './MoviesCollection'
import ShowsCollection from './ShowsCollection'

function App({ popularMovies, popularShows, topRatedMovies, topRatedShows }) {
  return (
    <main className="relative min-h-screen after:absolute after:inset-0 after:z-[-1] after:bg-home after:bg-cover after:bg-fixed after:bg-center after:bg-no-repeat">
      <Slider />
      <Brands />
      <MoviesCollection results={popularMovies} title="Popular Movies" />
      <ShowsCollection results={popularShows} title="Popular Shows" />
      <MoviesCollection results={topRatedMovies} title="Top Rated Movies" />
      <ShowsCollection results={topRatedShows} title="Top Rated Shows" />
    </main>
  )
}

export default App
