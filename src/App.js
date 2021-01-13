import Members from './Members'

function App() {
  return (
    <div className="grid grid-rows-layout min-h-screen max-w-4xl p-8 mx-auto">
      <div className="grid grid-cols-2 mt-10">
        <h1 className="font-serif font-bold text-3xl">The creative crew</h1>
        <div className="px-6">
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
