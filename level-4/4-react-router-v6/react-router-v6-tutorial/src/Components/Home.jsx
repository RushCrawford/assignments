import { useNavigate } from "react-router-dom"

function Home() {
    return (
        <div className="home--container" >
            <h1 className="home--title" >Noah's Bakery</h1>
            <div className="home--img-container" >
                <img className="home--img" src="https://s3.amazonaws.com/cupofsugarpinchofsalt/wp-content/uploads/2022/01/05135159/RosemaryAsiagoSourdoughItalianArtisanLoaf-medium1.jpg" />
            </div>
        </div>
    )
}

export default Home