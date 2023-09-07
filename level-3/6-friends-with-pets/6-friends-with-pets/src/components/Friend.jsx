import Pet from './Pet'

export default function Friend(props) {
    return (
        <div className="friend-container">
            <div className='name-and-age'>
                <h3 className='friend-name'>Name: {props.friend.name}</h3>
                <h3 className='friend-age'>Age: {props.friend.age}</h3>
            </div>
            <h3>Pets: {props.friend.pets.map(pets => {
                return (<Pet pets={pets} />)
            })}
            </h3>

        </div>
    )
}