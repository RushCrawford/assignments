import { useContext, useState } from "react"
import { Context } from "./Context"
import axios from 'axios'

function UglyThing(props) {
    const { uglyThingsList, formData, handleChange } = useContext(Context)
    const [editUglyThingsList, setEditUglythingsList] = useState(true)
    const [editData, setEditData] = useState({
        title: '',
        description: '',
        imgUrl: '',
    })

    const handleEditChange = (e) => {
        const { name, value } = e.target

        setEditData(prevData => ({
            ...prevData,
            [name]: value
        }
        ))
    }

    const handleEdit = (id) => {
        setEditUglythingsList(prev => !prev)

        // editUglyThingsList && console.log('worked')
        // axios.put(`https://api.vschool.io/russellcrawford/thing/${id}`)
        //     .then(()=> {
        //         alert('DELETED')
        //     })
        //     .catch(err => console.log(err))
    }

    const handleDelete = (id) => {
        axios.delete(`https://api.vschool.io/russellcrawford/thing/${id}`)
            .then(() => {
                alert('DELETED')
            })
            .catch(err => console.log(err))
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
                    <button onClick={() => handleEdit(props.id)}>edit</button>
                    <button onClick={() => handleDelete(props.id)}>delete</button>
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
                    <button onClick={() => handleEdit(props.id)}>cancel</button>
                    <button onClick={() => handleDelete(props.id)}>save</button>
                </>
            }
        </div>
    )
}

export default UglyThing