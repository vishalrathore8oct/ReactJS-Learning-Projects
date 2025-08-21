import { useState } from "react"

function ContactForm() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" })
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [errors, setErrors] = useState({})
    const [submitedName, setSubmittedName] = useState("")

    const validateForm = () => {
        const newErrors = {}
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!formData.name.trim()) newErrors.name = "Name is Required !";
        if (!formData.email.trim()) { newErrors.email = "Email is Required !" }
        else if (!emailRegex.test(formData.email)) { newErrors.email = "Invalied Email Format!" }
        if (!formData.message.trim()) newErrors.message = "Message is Required !";
        return newErrors
    }

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const validationError = validateForm()
        if (Object.keys(validationError).length > 0) {
            setErrors(validationError)
        } else {
        console.log("Response: ", formData);
        setSubmittedName(formData.name)
        setIsSubmitted(true)
        setErrors({})
        setFormData({ name: "", email: "", message: "" })
        }
    }
    return (
        <>
            {isSubmitted ? `Thank You: ${submitedName.toUpperCase()} ` :
                <div>
                    <h1>Contact Form</h1>
                    <form>
                        <div>
                            <label htmlFor="name">Name: </label>
                            <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required />
                            {errors.name && (<p style={{color: "red", margin: 0}}>{errors.name}</p>)}
                        </div>
                        <div>
                            <label htmlFor="email">Email: </label>
                            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />
                            {errors.email && (<p style={{color: "red", margin: 0}}>{errors.email}</p>)}
                        </div>
                        <div>
                            <label htmlFor="message">Message: </label>
                            <textarea name="message" id="message" cols="20" rows="2" value={formData.message} onChange={handleChange} required></textarea>
                            {errors.message && (<p style={{color: "red", margin: 0}}>{errors.message}</p>)}
                        </div>
                        <button type="submit" onClick={handleSubmit}>Submit</button>
                    </form>
                </div>
            }
        </>
    )
}

export default ContactForm