import { useEffect, useState } from 'react'
import Bounty from './components/bounty'
import AddBountyForm from './components/AddBountyForm'
import axios from 'axios'

function App() {
  const [bounty, setBounty] = useState([])

  console.log(bounty)

  const getBounties = ()=> {
    axios.get('/api/bounty')
      .then(res => setBounty(res.data))
      .catch(err => console.log(err))
  }

  const addBounty = (newBounty)=> {
    axios.post('/api/bounty', newBounty)
      .then(res => {
        setBounty(prevBounties => [...prevBounties, res.data])
      })
      .catch(err => console.log(err))
  }

  const deleteBounty = (bountyId)=> {
    axios.delete(`/api/bounty/${bountyId}`)
      .then(res => {
        setBounty(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
      })
      .catch(err => console.log(err))
  }

  const editBounty = (updates, bountyId, toggleForm)=> {
    axios.put(`/api/bounty/${bountyId}`, updates)
      .then(res => {
        setBounty(prevBounties => prevBounties.map(bounty => 
          bounty._id !== bountyId ? bounty : res.data))
      })
      .catch(err => console.log(err))
      toggleForm()
  }

  useEffect(()=> {
    getBounties()
  }, [])

  const bountyCard = bounty.map(bounty => 
    <Bounty 
      {...bounty} 
      key={bounty._id} 
      deleteBounty={deleteBounty} 
      editBounty={editBounty}
    />)

  return (
    <>
      <div className='bounty-form-wrapper'>
        <AddBountyForm 
          submit={addBounty}
          btnTxt='Add Bounty'
        />
      </div>
      <div className='bounty-card-wrapper'>
        {bountyCard}
      </div>
    </>
  )
}

export default App