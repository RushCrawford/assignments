import { useState } from "react"
import AddBountyForm from "./AddBountyForm"

function Bounty(props) {
    const { firstName, lastName, bounty, type, _id, isLiving, deleteBounty, editBounty } = props
    const [editToggle, setEditToggle] = useState(false)

    return (
        <div style={{
            backgroundColor: type === 'jedi' ? '#037ffc' : '#fc0335' }} 
            className="bounty-wrapper"
        >
            {!editToggle ?
                <>
                    <div className="bounty--name-wrapper">
                        <h1>{firstName}</h1>
                        <h1>{lastName}</h1>
                        <h4>{type}</h4>
                    </div>
                    <div className="bounty--type-amount-wrapper">
                        <h2>{bounty} Credits</h2>
                        {isLiving ? <h2>Pending Completion</h2> : null}
                    </div>
                    <button onClick={() => deleteBounty(_id)} >Delete</button>
                    <button onClick={() => setEditToggle(prev => !prev)} >Edit</button>
                </>
                :
                <>
                    <AddBountyForm
                        firstName={firstName}
                        lastName={lastName}
                        isLiving={isLiving}
                        bounty={bounty}
                        type={type}
                        _id={_id}
                        btnTxt='Submit Edit'
                        submit={editBounty}
                        toggleForm={() => setEditToggle(prev => !prev)}
                    />
                    <button onClick={() => setEditToggle(prev => !prev)} >Cancel</button>
                </>
            }
        </div>
    )
}

export default Bounty