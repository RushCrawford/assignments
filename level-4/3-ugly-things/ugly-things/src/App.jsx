import { ContextProvider } from "./Context"
import UglyList from "./UglyList"
import Form from "./Form"

function App() {

  return (
    <>
      <ContextProvider>
        <h1>test</h1>
        <UglyList />
        <Form />
      </ContextProvider>
    </>
  )
}

export default App
