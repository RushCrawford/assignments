import { Context } from "./Context";
import { useContext } from "react";

function Form() {
    const {formData, handleChange, handleSubmit} = useContext(Context)

    return (
        <form onSubmit={handleSubmit}>
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
            <button>Submit</button>
        </form>
    )
}

export default Form