import { Context } from "./Context"
import { useContext } from "react"
import UglyThing from "./UglyThing"

function UglyList() {
    const { uglyThingsList } = useContext(Context)
    const uglyThingsBadges = uglyThingsList.map((badge, index) => {
        return (
            <UglyThing 
            key={index}
            title={badge.title} 
            id={badge._id} 
            description={badge.description}
            imgUrl={badge.imgUrl} 
            handleEdit={() => handleEdit()}
            handleDelete={() => console.log("i work")}
            />
        )
    })
    return (
        <div className="ugly-list-container">
            <h1>Ugly things</h1>
            <div className="ugly-list-container--badges">
                {uglyThingsBadges}
            </div>
        </div>
    )
}

export default UglyList