function Card(props) {

    // logic for price indicator
    let priceIndicatorText
    if(props.spot.price < 500) {
        priceIndicatorText = '$'
    } else if(props.spot.price > 500 && props.spot.price < 1000) {
        priceIndicatorText = '$$'
    } else {
        priceIndicatorText = '$$$'
    }

    //logic for background change with season

    return(
        <div className="card">
            <div>{priceIndicatorText}</div>
            <img className="card--background" src="" />
            <h1>{props.spot.place}</h1>
            <h3>${props.spot.price}/night</h3>
        </div>
    )
}

export default Card