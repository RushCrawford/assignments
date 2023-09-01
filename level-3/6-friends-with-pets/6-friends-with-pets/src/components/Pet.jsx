export default function Pet(props) {
    console.log(props)
    return(
        <div className="pet-container">
            <h3>Name: {props.pets.name}</h3>
            <h3>Breed: {props.pets.breed}</h3>
        </div>
    )
}