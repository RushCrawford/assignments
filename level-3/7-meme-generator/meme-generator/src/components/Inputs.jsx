export default function Inputs() {
    return (
        <div className="inputs-container">
            <div className="inputs">
                <input className="top-input" type="text" placeholder="Top line of text" />
                <input className="bottom-input" type="text" placeholder="Bottom line of text" />
            </div>
            <button>Get new meme image</button>
        </div>
    )
}