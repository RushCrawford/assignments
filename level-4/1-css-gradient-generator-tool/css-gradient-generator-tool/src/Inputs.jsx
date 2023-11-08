import { HuePicker } from "react-color";

export default function Inputs(props) {
    const { color, setColor } = props
    return(
        <div className="inputs-container">
            <h1>Options</h1>
            <div>
              
                <span>Color 1: <HuePicker 
                    color={color}
                    onChange={(color) => {setColor(color)}}
                /></span>
                <span>Color 2: <HuePicker /></span>

                {color}
            </div>
        </div>
    )
}