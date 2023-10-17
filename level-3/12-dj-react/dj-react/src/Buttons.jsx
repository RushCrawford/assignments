export default function Buttons(props) {

    return (
        <nav className="button-container">
            <button onClick={props.smallTime}>Small Time</button>
            <button onClick={props.party}>Party</button>
            <button onClick={props.proLeft}>Pro Left</button>
            <button onClick={props.proRight}>Pro Right</button>
            <button onClick={props.topLeft}>Top Left</button>
            <button onClick={props.topRight}>Top Right</button>
            <button onClick={props.bottomLeft}>Bottom Left</button>
            <button onClick={props.bottomRight}>Bottom Right</button>
        </nav>
    )
} 