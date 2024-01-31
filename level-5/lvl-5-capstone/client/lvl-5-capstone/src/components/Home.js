import { useContext } from 'react'
import { Context } from "../context"
import UserForm from './userForm'

function Home() {
    const { toggleForm, toggle } = useContext(Context)
    return (
        <>
        { toggle ? <UserForm /> : 
            <div className="home-component-wrapper">

                <div className="home-component--title-wrapper">
                    <h1>Noah's Bakery</h1>
                    <h3>Small Batch Artisan Breads</h3>
                </div>

                <div className="home-component--online-module-wrapper">
                    <h2>Become an Artisan Baker at Home by joining the Baker's Club</h2>
                    <h3>Take the online course to learn how to make delicious and nutritious breads at home.</h3>
                    <button onClick={toggleForm}>Join</button>
                </div>

            </div>}
        </>
    )
}

export default Home