export default function DiceBox(props) {
    const numbers = props.numbers

    return (
        <>
            <div className="dice-1">{numbers[0]}</div>
            <div className="dice-2">{numbers[1]}</div>
            <div className="dice-3">{numbers[2]}</div>
            <div className="dice-4">{numbers[3]}</div>
            <div className="dice-5">{numbers[4]}</div>
        </>
    )
}