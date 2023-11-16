import { ContextProvider } from "./Context"
import UglyList from "./UglyList"
import Form from "./Form"

function App() {

  return (
    <>
      <ContextProvider>
        <div className="app-container">
          <h1>A place to share all things UGLY</h1>
          <Form />
          <UglyList />
          {/* <UglyThing title={badge.title} /> */}
        </div>
      </ContextProvider>
    </>
  )
}

export default App
