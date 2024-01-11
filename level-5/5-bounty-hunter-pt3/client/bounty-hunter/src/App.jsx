import { useEffect, useState } from 'react'
import Bounty from './components/bounty'
import axios from 'axios'

function App() {
  const [bounty, setBounty] = useState([])

  useEffect(()=> {
    axios.get('/bounty')
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <Bounty />
    </>
  )
}

export default App

// const init = [{
//   firstName: "",
//   lastName: "",
//   living: true,
//   bounty: 0,
//   type: "",
// }]