import { HuePicker } from "react-color";

export default function Inputs(props) {
    const { color1, color2, setColor1, setColor2 } = props
    return(
        <div className="inputs-container">
            <h1>Options</h1>
            <div>
                <span>Color 1: {color1} <HuePicker 
                    color1={color1}
                    onChange={(color1) => {setColor1(color1.hex)}}
                /></span>

                <span>Color 2: {color2} <HuePicker 
                    color2={color2}
                    onChange={(color2) => {setColor2(color2.hex)}}
                /></span>

                
            </div>
        </div>
    )
}