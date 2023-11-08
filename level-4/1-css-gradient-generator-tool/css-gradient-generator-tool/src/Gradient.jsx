export default function Gradient(props) {
    const { color1, setColor1 } = props
    return (
        <div className="gradient-container">
            <div
                className="gradient--display"
                style={{
                    backgroundColor: color1,
                }}
            >
            </div>
            <div>
                background: linear-gradient(50deg, {color1} , #000000);
                -moz-background: linear-gradient(50deg, #FFFF00 , #000000);
                -webkit: linear-gradient(50deg, #FFFF00 , #000000)
            </div>
        </div>
    )
}