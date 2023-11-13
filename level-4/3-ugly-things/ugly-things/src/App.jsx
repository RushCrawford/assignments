import { ContextProvider } from "./Context"
import UglyList from "./UglyList"
import Form from "./Form"

function App() {

  return (
    <>
      <ContextProvider>
        <h1>A place to share all things UGLY</h1>
        <Form />
        <UglyList />
      </ContextProvider>
    </>
  )
}

export default App
