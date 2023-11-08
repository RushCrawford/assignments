import { HuePicker } from "react-color";

export default function Inputs(props) {
    const { color1, color2, angle, setColor1, setColor2, handleAngleChange, increase, decrease } = props
        
    return (
        <div className="inputs-container">
            <h1 className="inputs-container--title">Options</h1>
            <div>
                Color 1: {color1} <HuePicker
                    color1={color1}
                    onChange={(color1) => { setColor1(color1.hex) }}
                    className="inputs"
                />

                Color 2: {color2} <HuePicker
                    color2={color2}
                    onChange={(color2) => { setColor2(color2.hex) }}
                    className="inputs"
                />
                
                Angle: <input
                    type="number"
                    id="numberInput"
                    value={angle}
                    onChange={handleAngleChange}
                    className="inputs"
                />
                <button className="button" onClick={increase}>+</button>
                <button className="button" onClick={decrease}>-</button>
            </div>
        </div>
    )
}