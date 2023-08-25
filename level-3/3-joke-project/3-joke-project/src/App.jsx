// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import Joke from './Joke'
export default function App() {
  return (
    <div>
      <Joke
        setup='Why did the chicken cross the road?'
        punchline='To get to them titties!'
      />
      <Joke
        setup='Why did the little girl fall off the swing?'
        punchline='She didnt have any arms.'
      />
      <Joke
        setup='Is your refrigerator running?'
        punchline='You better go catch it!'
      />
      <Joke
        setup='What is a pirates favrorite letter?'
        punchline='Youd think its the ARRRR but its really the C!'
      />
      <Joke
        setup='Why did the chicken cross the road?'
        punchline='To get to them titties!'
      />
      <Joke
        setup='Why did the chicken cross the road?'
        punchline='To get to them titties!'
      />
    </div>
  )
}
