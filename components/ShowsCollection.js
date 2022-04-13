import MovieThumbnail from './MovieThumbnail'

function ShowsCollection({ results, title }) {
  return (
    <div className="relative my-10 mx-auto flex max-w-[1400px] flex-col space-y-2 px-8">
      <h2 className="font-semibold">{title}</h2>
      <div className="-m-2 flex space-x-6 overflow-y-hidden p-2 scrollbar scrollbar-thin scrollbar-thumb-slate-600">
        {results.map((result) => {
          return <MovieThumbnail key={result.id} result={result} />
        })}
      </div>
    </div>
  )
}

export default ShowsCollection
