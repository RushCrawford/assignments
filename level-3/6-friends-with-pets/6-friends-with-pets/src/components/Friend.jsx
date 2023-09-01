export default function Friend(props) {
    //map over pets array
    return(
        <div className="friend-container">
            <h3>Name: {props.friend.name}</h3>
            <h3>Age: {props.friend.age}</h3>
            {/* <h3>Pets: {props.friend.pets}</h3> */}
        </div>
    )
}