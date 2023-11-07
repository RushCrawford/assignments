export default function Inputs(props) {
    const { color } = props
    return(
        <div className="inputs-container">
            <h1>Options</h1>
            <form>
                <input 
                    name="color-1"
                    
                />
                
                {color}
            </form>
        </div>
    )
}