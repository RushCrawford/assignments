export default function Gradient(props) {
    const { color1, color2, angle } = props
    return (
        <div className="gradient-container">
            <div
                className="gradient--display"
                style={{
                    background: `linear-gradient(${angle}deg, ${color1}, ${color2})`,
                }}
            >
            </div>
            <div>
                background: linear-gradient({angle}deg, {color1} , {color2});
                <br />
                -moz-background: linear-gradient({angle}deg, {color1} , {color2});
                <br />
                -webkit: linear-gradient({angle}deg, {color1} , {color2})
            </div>
        </div>
    )
}