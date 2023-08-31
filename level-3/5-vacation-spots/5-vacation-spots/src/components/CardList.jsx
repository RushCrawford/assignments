import data from './data'
import Card from './Card'

function CardList() {
    const vacationSpots = data.map(spot => { return (<Card spot={spot} />) })

    return (
        <div className='list-container'>
            <div className='card-container'>
                {vacationSpots}
            </div>
        </div>
    )
}

export default CardList