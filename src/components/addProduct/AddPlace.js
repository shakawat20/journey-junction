import { useState } from "react"

const AddPlace = () => {
    const [formData, setFormData] = useState({
        name:"",
        description:"",
        price:0
    })
    const handleChange = (e) => {
        setFormData(
            {
                ...formData, [e.target.name]: e.target.value
            }
        )
    }
    console.log(formData)
    const handleSubmit = async (e) => {
        e.preventDefault()
    }

    return (
        <>
            <form onSubmit={handleSubmit} action="">

                <input type="text" className="name" name="name" placeholder="Place Name" value={formData.name} onChange={handleChange} />
                <input type="text" className="description" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
                <input type="text" className="price" name="price" placeholder="Price" value={formData.price} onChange={handleChange} />
                {/* <input type="number" className="number" name="name" placeholder="number" value={formData.number} onChange={handleChange} /> */}

            </form>
        </>
    )
}

export default AddPlace