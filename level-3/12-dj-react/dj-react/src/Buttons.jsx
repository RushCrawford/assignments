export default function Buttons(props) {

    return (
        <nav className="button-container">
            <button onClick={props.smallTime}>Small Time</button>
            <button onClick={props.party}>Party</button>
            <button onClick={props.bottomLeft}>Pro Left</button>
            <button onClick={props.bottomRight}>Pro Right</button>
        </nav>
    )
} 