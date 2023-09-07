export default function Pet(props) {
    return(
        <div className="pet-container">
            <h5>Pet's Name: {props.pets.name}</h5>
            <h5>Pet's Breed: {props.pets.breed}</h5>
        </div>
    )
}