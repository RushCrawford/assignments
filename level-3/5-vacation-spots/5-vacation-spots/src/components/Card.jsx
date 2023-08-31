function Card(props) {

    // logic for price indicator
    let priceIndicatorText
    if (props.spot.price < 500) {
        priceIndicatorText = '$'
    } else if (props.spot.price > 500 && props.spot.price < 1000) {
        priceIndicatorText = '$$'
    } else {
        priceIndicatorText = '$$$'
    }

    //logic for background change with season

    return (
        <div className="card">
            <h1 className="card--title">{props.spot.place}</h1>
            <div className="card--price-container">
                <img className="card--background" src="" />
                <h3><span>{priceIndicatorText}</span> - ${props.spot.price}/night</h3>
            </div>
        </div>
    )
}

export default Card