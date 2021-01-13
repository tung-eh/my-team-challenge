import Members from './Members'

function App() {
  return (
    <div className="grid grid-rows-layout min-h-screen max-w-4xl py-8 px-6 mx-auto">
      <div className="grid md:grid-cols-2 gap-10 mt-10">
        <h1 className="font-serif font-bold text-3xl">The creative crew</h1>
        <div>
          <h2 className="uppercase font-semibold mb-3">Who we are</h2>
          <p className="font-normal">
            We are team of creatively diverse. driven. innovative individuals
            working in various locations from the world
          </p>
        </div>
      </div>
      <Members />
      <div className="font-footer text-xs text-center text-gray-600">
        Tung Teng @ DevChallenges.io
      </div>
    </div>
  )
}

export default App
