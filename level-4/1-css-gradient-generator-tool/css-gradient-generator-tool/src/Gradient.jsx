export default function Gradient(props) {
    const { color, setColor } = props
    return (
        <div className="gradient-container">
            <div className="gradient--display">
                <ColorPicker
                    value={color}
                    onChange={(color) => setColor(color)}
                />
            </div>
            <textarea />
        </div>
    )
}