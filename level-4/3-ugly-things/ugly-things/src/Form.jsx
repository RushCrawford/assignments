import { Context } from "./Context";
import { useContext } from "react";

function Form() {
    const {formData, handleChange} = useContext(Context)

    return (
        <form>
            <h1>Form</h1>
            <input 
                type="text"
                name="title"
                placeholder="Title"
                value={formData.title}
                minLength={3}
                onChange={handleChange}
            />
            <input 
                type="text"
                name="description"
                placeholder="Description"
                value={formData.description}
                minLength={3}
                onChange={handleChange}
            />
            <input 
                type="text"
                name="img"
                placeholder="Img URL"
                value={formData.img}
                minLength={3}
                onChange={handleChange}
            />
        </form>
    )
}

export default Form