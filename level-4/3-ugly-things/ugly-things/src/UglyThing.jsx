import { useState } from "react"
import axios from 'axios'

function UglyThing(props) {
    const { editThing, id, title, description, imgUrl } = props

    const [editUglyThingsList, setEditUglyThingsList] = useState(true)
    const [editData, setEditData] = useState({
        title: title || '',
        description: description || '',
        imgUrl: imgUrl || '',
    })
    
    const handleEdit = () => {
        setEditUglyThingsList(prev => !prev)

        editUglyThingsList
    }

    const handleEditChange = (e) => {
        const { name, value } = e.target

        setEditData(prevData => ({
            ...prevData,
            [name]: value
        }
        ))
        console.log(editData)
    }

    const handleDelete = (id) => {
        axios.delete(`https://api.vschool.io/russellcrawford/thing/${id}`)
            .then(() => {
                alert('DELETED')
            })
            .catch(err => console.log(err))  
    }

    const submitEdit = () => {
        setEditUglyThingsList(prev => !prev)
        editThing(editData, id)
    }

    return (
        <div key={props.index}>
            {editUglyThingsList ?
            // displays ugly thing and edit and delete button
                <>
                    <div>
                        <h3>{props.title}</h3>
                        <h4>{props.description}</h4>
                    </div>
                    <img src={props.imgUrl} className="image" />
                    <button onClick={() => handleEdit(id)}>edit</button>
                    <button onClick={() => handleDelete(id)}>delete</button>
                </>
                :
            // displays edit ugly thing and cancel and save button
                <>
                    <div>
                        <input
                            type="text"
                            name="title"
                            placeholder={props.title}
                            value={editData.title}
                            minLength={3}
                            onChange={handleEditChange}
                        />
                        <input
                            type="text"
                            name="description"
                            placeholder={props.description}
                            value={editData.description}
                            minLength={3}
                            onChange={handleEditChange}
                        />
                        <input
                            type="text"
                            name="imgUrl"
                            placeholder={props.imgUrl}
                            value={editData.imgUrl}
                            minLength={3}
                            onChange={handleEditChange}
                        />
                    </div>
                    <img src={props.imgUrl} className="image" />
                    <button onClick={() => handleEdit()}>cancel</button>
                    <button onClick={() => submitEdit()}>save</button>
                </>
            }
        </div>
    )
}

export default UglyThing