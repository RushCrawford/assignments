import { useContext, useState } from "react"
import { Context } from "./Context"
import axios from 'axios'

function UglyThing(props) {
    const { handleSave } = useContext(Context)
    const { editThing, id, title, description, imgUrl } = props

    const [editUglyThingsList, setEditUglyThingsList] = useState(true)
    const [editData, setEditData] = useState({
        title: title || '',
        description: description || '',
        imgUrl: imgUrl || '',
    })
    
    const handleEdit = (id) => {
        setEditUglyThingsList(prev => !prev)


        editUglyThingsList && console.log('worked')
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

    const handleCancel = () => {
        setEditUglythingsList(prev => !prev)
    }

    const submitEdit = () => {
        setEditUglyThingsList(prev => !prev)
        editThing(editData, id)
    }

    return (
        // <div>{props.title}</div>
        <div key={props.index}>
            {editUglyThingsList ?
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
                    <button onClick={() => handleCancel(id)}>cancel</button>
                    <button onClick={() => submitEdit()}>save</button>
                </>
            }
        </div>
    )
}

export default UglyThing