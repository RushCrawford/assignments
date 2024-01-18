import { useState } from "react"

function AddBountyForm (props) {
    const initInputs = {
    firstName: props.firstName || "",
    lastName: props.lastName || "",
    // living: props.living || '',
    bounty: props.bounty || '',
    type: props.type || "",
    }
    const [inputs, setInputs] = useState(initInputs)
    const [isChecked, setIsChecked] = useState(true)

    const handleChange = (e)=> {
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]:value}))
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        props.submit(inputs, props._id, props.toggleForm)
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
            <label>
                Check if Alive
                <input 
                    type="checkbox"
                    checked={isChecked}
                    onChange={()=> {setIsChecked(prev => !prev)}}
                />
            </label>
            <button className="sbmt-btn">{props.btnTxt}</button>
        </form>
    )
}

export default AddBountyForm