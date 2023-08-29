export default function Card(props) {
    return (
        <div className="card">
            <img className="card--img" src="https://www.athletespeakers.com/storage/celebrities/1627410490_Katie-Zaferes-Banner-1.jpg" />

            <div className="rating">
                <img className="card--star" src="https://www.freepnglogos.com/uploads/red-star-png/red-star-star-red-clip-art-clkerm-vector-clip-art-online-7.png" />
                <p><span>{props.stats.rating}</span><span className="grey">{props.stats.reviewCount}-{props.location}</span></p>
            </div>

            <div className="price">
                <p>{props.title}</p>
            <p><b>from ${props.price}</b> / person</p>
            </div>
        </div>
    )
}

        // id: 1,
        // title: "Life Lessons with Katie Zaferes",
        // description: "I will share with you what I call \"Positively Impactful Moments of Disappointment.\" Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.",
        // price: 136,
        // coverImg: "katie-zaferes.png",
        // stats: {
        //     rating: 5.0,
        //     reviewCount: 6
        // },
        // location: "Online",
        // openSpots: 0,
