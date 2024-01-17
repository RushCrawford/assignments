import { useState } from "react"

function AddBountyForm (props) {
    const initInputs = {
    firstName: props.firstName || "",
    lastName: props.lastName || "",
    living: props.living || '',
    bounty: props.bounty || '',
    type: props.type || "",
    }
    const [inputs, setInputs] = useState(initInputs)

    const handleChange = (e)=> {
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]:value}))
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="firstName"
                value={inputs.firstName}
                onChange={handleChange}
                placeholder="First Name"
            />
            <input 
                type="text"
                name="lastName"
                value={inputs.lastName}
                onChange={handleChange}
                placeholder="Last Name"
            />
            <input 
                type="text"
                name="living"
                value={inputs.living}
                onChange={handleChange}
                placeholder="Living?"
            />
            <input 
                type="number"
                name="bounty"
                value={inputs.bounty}
                onChange={handleChange}
                placeholder="Bounty Amount"
            />
            <input 
                type="text"
                name="type"
                value={inputs.type}
                onChange={handleChange}
                placeholder="sith or jedi"
            />
            <button>{props.btnTxt}</button>
        </form>
    )
}

export default AddBountyForm