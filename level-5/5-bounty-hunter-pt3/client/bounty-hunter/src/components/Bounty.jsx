function Bounty(props) {
    const { firstName, lastName, living, bounty, type } = props

    return(
        <div style={{ backgroundColor: living ? 'green' : 'red' }} className="bounty-wrapper">
            <div className="bounty--name-wrapper">
                <h1>{firstName}</h1>
                <h1>{lastName}</h1>
                <h4>{type}</h4>
            </div>
            <div className="bounty--type-amount-wrapper"> 
                <h2>{bounty} Credits</h2>
            </div>
        </div>
    )
}

export default Bounty