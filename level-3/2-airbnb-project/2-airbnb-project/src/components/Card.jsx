export default function Card(props) {
        let badgeText
        if (props.openSpots === 0) {
            badgeText = 'SOLD OUT'
        } else if (props.location === 'Online') {
            badgeText = 'ONLINE'
        }

        return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--img" src={props.coverImg} />

        <section>
            <div className="rating">
                <img className="card--star" src="https://www.freepnglogos.com/uploads/red-star-png/red-star-star-red-clip-art-clkerm-vector-clip-art-online-7.png" />
                <p><span>{props.rating}</span><span className="grey">({props.reviewCount})-{props.location}</span></p>
            </div>

            <div className="price">
                <p>{props.title}</p>
            <p><b>from ${props.price}</b> / person</p>
            </div>
        </section>
        </div>
    )
}
