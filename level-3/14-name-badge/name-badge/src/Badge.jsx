export default function Badge(props) {
    const {firstName, lastName, email, birthPlace, phoneNumber, favoriteFood, about } = props.badge
    console.log('props', props)
    return (
        <div>
            <h3>First Name: {firstName}</h3>
            <h3>Last Name: {lastName}</h3>
            <h3>Email: {email}</h3>
            <h3>Place of Birth: {birthPlace}</h3>
            <h3>Phone Number: {phoneNumber}</h3>
            <h3>Favorite Food: {favoriteFood}</h3>
        </div>
    )
}