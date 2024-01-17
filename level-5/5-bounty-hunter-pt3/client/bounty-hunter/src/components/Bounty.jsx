import { useState } from "react"
import AddBountyForm from "./AddBountyForm"

function Bounty(props) {
    const { firstName, lastName, living, bounty, type, _id, deleteBounty,editBounty } = props
    const [ editToggle, setEditToggle ] = useState(false)

    return(
        <div style={{ backgroundColor: living ? 'green' : 'red' }} className="bounty-wrapper">
            { !editToggle ?
            <>
                <div className="bounty--name-wrapper">
                    <h1>{firstName}</h1>
                    <h1>{lastName}</h1>
                    <h4>{type}</h4>
                </div>
                <div className="bounty--type-amount-wrapper"> 
                    <h2>{bounty} Credits</h2>
                </div>
                <button onClick={()=> deleteBounty(_id)} >Delete</button>
                <button onClick={()=> setEditToggle(prev => !prev)} >Edit</button>
            </>
            :
            <>
                <AddBountyForm
                    firstName={firstName}
                    lastName={lastName}
                    living={living}
                    bounty={bounty}
                    type={type}
                    _id={_id}
                    btnTxt='Submit Edit'
                    submit={editBounty}
                />
                <button onClick={()=> setEditToggle(prev => !prev)} >Cancel</button>
            </>
            }
        </div>
    )
}

export default Bounty