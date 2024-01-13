function Bounty(props) {
    const { firstName, lastName, living, bounty, type } = props

    return(
        <div style={{ backgroundColor: living ? 'green' : 'red' }} className="bounty-wrapper">
            <div className="bounty--name-wrapper">
                <h1>{firstName}</h1>
                <h1>{lastName}</h1>
            </div>
            <div className="bounty--type-amount-wrapper"> 
                <h4>{type}</h4>
                <h2>{bounty}</h2>
            </div>
        </div>
    )
}

export default Bounty