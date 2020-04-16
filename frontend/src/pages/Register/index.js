import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import './styles.css'

import api from '../../services/api'

import uvaImg from '../../assets/uva.svg'
import logoImg from '../../assets/logo.svg'

export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [whatsapp, setWhatsapp] = useState('')

const history = useHistory()

    async function handleRegister(e) {
        e.preventDefault()

        const data = ({
            name,
            email,
            whatsapp
        })

        try {
        const response = await api.post('users', data)

        alert(`Seu Id de acesso: ${response.data.id}`)
        
        history.push('/')
    
    } catch (err){
            alert('Erro no cadastro, tente novamente')
         }   
    }



    return (
        <div className="container">
            <div className="marca">
                <img src={uvaImg} alt="logo"/>
                <img src={ logoImg } alt="logo"/>
            </div>
            <section className="form">
                <form onSubmit={ handleRegister }>
                    <h1>Cadastro</h1>   
                    <input 
                        placeholder="nome"
                        value= {name}
                        onChange={ e => setName(e.target.value)}
                    />
                    <input
                        type="email:"
                        placeholder="e-mail:"
                        value= {email}
                        onChange={ e => setEmail(e.target.value)}    
                    />
                    <input
                        placeholder="whatsapp"
                        value= {whatsapp}
                        onChange={ e => setWhatsapp(e.target.value)}    
                    />
                    <button type="submit" className="button">CADASTRAR</button>
                    <Link to ="/">
                        < FiArrowLeft size={16} alt="sair"/>
                        voltar para o logon</Link>
                </form> 
            </section>



             


        </div>    

    )
}