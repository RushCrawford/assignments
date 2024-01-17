import { useState } from "react"

function AddBountyForm (props) {
    const initInputs = {
    firstName: "",
    lastName: "",
    living: true,
    bounty: 0,
    type: "",
    }
    const [inputs, setInputs] = useState(initInputs)
    const { addBounty } = props

    const handleChange = (e)=> {
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]:value}))
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        addBounty(inputs)
        setInputs(initInputs)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="firstName"
                value={inputs.firstName}
                onChange={handleChange}
                placeholder="firstName"
            />
            <input 
                type="text"
                name="lastName"
                value={inputs.lastName}
                onChange={handleChange}
                placeholder="lastName"
            />
            <input 
                type="boolean"
                name="living"
                value={inputs.living}
                onChange={handleChange}
                placeholder="living"
            />
            <input 
                type="number"
                name="bounty"
                value={inputs.bounty}
                onChange={handleChange}
                placeholder="bounty amount"
            />
            <input 
                type="text"
                name="type"
                value={inputs.type}
                onChange={handleChange}
                placeholder="sith or jedi"
            />
            <button>Add Bounty</button>
        </form>
    )
}

export default AddBountyForm