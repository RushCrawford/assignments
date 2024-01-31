import { useContext } from 'react'
import { Context } from '../context'

function UserForm () {
    const { inputs, handleChange, handleSubmit } = useContext(Context)

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="name"
                value={inputs.name}
                onChange={handleChange}
                placeholder="Full Name"
            />
            <input 
                type="text"
                name="email"
                value={inputs.email}
                onChange={handleChange}
                placeholder="Email"
            />
            <input 
                type="text"
                name="phoneNumber"
                value={inputs.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
            />
            <button>Submit</button>
        </form>
    )
}

export default UserForm