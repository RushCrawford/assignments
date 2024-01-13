import { useEffect, useState } from 'react'
import Bounty from './components/bounty'
import axios from 'axios'

function App() {
  const [bounty, setBounty] = useState([])

  useEffect(()=> {
    axios.get('/api/bounty')
      .then(res => setBounty(res.data))
      .catch(err => console.log(err))
  }, [])

    console.log(bounty)
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