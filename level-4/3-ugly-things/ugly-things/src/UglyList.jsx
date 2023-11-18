import { Context } from "./Context"
import { useContext } from "react"
import UglyThing from "./UglyThing"
import axios from 'axios'


function UglyList() {
    const { uglyThingsList, setUglyThingsList } = useContext(Context)

    function editThing(update, thingId){
        axios.put(`https://api.vschool.io/russellcrawford/thing/${thingId}`, update)
            .then(res => {
                setUglyThingsList(prev => prev.map(thing => thing._id !== thingId ? thing : res.data))
            })
    }

    const uglyThingsBadges = uglyThingsList.map((badge, index) => {
        return (
            <UglyThing
                key={index}
                title={badge.title}
                id={badge._id}
                description={badge.description}
                imgUrl={badge.imgUrl}
                editThing={editThing}
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