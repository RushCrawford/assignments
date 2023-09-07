import data from './data'
import Friend from './Friend'

export default function FriendList() {
    //map over data to display friends
    const friends = data.map(friend => {
        return (<Friend friend={friend}/>)
    })
    return(
        <div>
        {friends}
        </div>

    
        )
}