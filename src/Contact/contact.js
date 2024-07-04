import { useState } from "react";
import "./contact.css";
import axios from "axios";

export default function Contact(){
    
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [messageSuccess, setMessageSuccess] = useState(false);
    const [errors, setErrors] = useState([]);

    const validateForm = () => {
        const errors = [];
        if (!name) errors.push("Full Name is required");
        if (!email) errors.push("Email is required");
        if (!message) errors.push("Message is required");
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (email && !emailPattern.test(email)) errors.push("Email is not valid");
        setErrors(errors);
        return errors.length === 0;
    };

    const sendMessage = () => {
        if (!validateForm()) return;

        const data = {
            service_id: 'service_ojjm9v9',
            template_id: 'contact_form',
            user_id: '4ZMtm3Ul6TYvWSd6E',
            template_params: {
                'from_email': email,
                'from_name': name,
                'to_name': "Moustafa Radi",
                'message': message
            }
        };

        const url = "https://api.emailjs.com/api/v1.0/email/send";
        axios.post(
            url,
            data,
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        ).then((res) => {
            console.log(res);
            setMessageSuccess(true);
            setTimeout(() => setMessageSuccess(false), 2000);
            setName("");
            setEmail("");
            setMessage("");
        }).catch((err) => {
            console.log(err);
        });
    };

    return (
        <div className="contactContainer" id="Contact">
            <div className="contactTitle">
                Leave Us A Message 
            </div>
            <div>
                <form>
                    <label htmlFor="fullname" className="">
                        Full Name
                    </label>
                    <input 
                        type="text" 
                        id="fullname" 
                        name="fullname" 
                        className="contactInput" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label htmlFor="email" className="">
                        Email
                    </label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        className="contactInput" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="message" className="">
                        Message
                    </label>
                    <textarea 
                        id="message" 
                        name="message" 
                        className="contactInput" 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>

                    <input 
                        type="button" 
                        value="Submit" 
                        className="contactSubmit" 
                        onClick={sendMessage}
                    />
                </form>
                {messageSuccess && <div className="successMessage">Message sent successfully!</div>}
                {errors.length > 0 && (
                    <div className="errorMessages">
                        {errors.map((error, index) => (
                            <div key={index} className="errorMessage">{error}</div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
