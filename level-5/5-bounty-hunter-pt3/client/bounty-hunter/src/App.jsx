import { useEffect, useState } from 'react'
import Bounty from './components/bounty'
import AddBountyForm from './components/AddBountyForm'
import axios from 'axios'

function App() {
  const [bounty, setBounty] = useState([])

  const getBounties = ()=> {
    axios.get('/api/bounty')
      .then(res => setBounty(res.data))
      .catch(err => console.log(err))
  }

  const addBounty = (newBounty)=> {
    axios.post('/api/bounty', newBounty)
      .then(res => {
        console.log(res)
        setBounty(prevBounties => [...prevBounties, res.data])
      })
      .catch(err => console.log(err))
  }

  useEffect(()=> {
    getBounties()
  }, [])

  const bountyCard = bounty.map(bounty => <Bounty {...bounty} key={bounty._id} />)

  return (
    <>
      <AddBountyForm 
      addBounty={addBounty} 
      />
      {bountyCard}
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