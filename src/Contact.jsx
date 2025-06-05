import { useState } from "react"

import style from './Contact.module.css'

function Contact() {
 const defaultNumber = "5541991540580"
 const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    }

    const handleZap = () => {
        const { name, email, password } = formData;
      
        const message = `Nome: ${name}%0AEmail: ${email}%0AMensagem: ${password}`;
        const URLzap = `https://api.whatsapp.com/send?phone=${defaultNumber}&text=${message}`;
      
        window.open(URLzap, "_blank");
      };
      

    return(
        <>
        <section className={style.wrapMensagem}>
        <br />
            <input placeholder="Insira Seu Nome: " type="text" id='name' name="name" value={formData.name} onChange={handleChange} required />
            <input placeholder="Insira Seu Email: " type="text" id="email" name="email" value={formData.email} onChange={handleChange} required/>
            <textarea placeholder="Insira Sua Mensagem: "  id="password" name="password" value={formData.password} onChange={handleChange} cols={30} rows={10} required></textarea>
            <button onClick={handleZap}>Enviar </button>
        </section>
        </>
    )
}

export default Contact