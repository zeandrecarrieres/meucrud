import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'
import './styles.css'

import api from '../../services/api'


import uvaImg from '../../assets/uva.svg'
import logoImg from '../../assets/logo.svg'

export default function Logon() {
    const [id, setId] = useState('')
    const history = useHistory()

 async function handleLogin(e) {
        e.preventDefault()

        try {
            const response = await api.post('sessions', { id })

            localStorage.setItem('userId', id)
            localStorage.setItem('userName', response.data.name)

            history.push('products')
        } catch (erro) {
            alert('Falha no login, tente novamente.')
        }

    }

    return(
        <div className="logon_container">
            <section className="form">
                    <img src={uvaImg} alt="MyWineCave"/>
                    <img src={logoImg} alt="logo"/>
                <form onSubmit={handleLogin}>
                    <input
                        placeholder="seu usuário"
                        value= {id}
                        onChange={ e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link to="/register">
                        <FiLogIn size={16} color="#6C0000"/>
                        Quero me cadastrar
                    </Link>
                </form>
            </section>

        </div>
    )
}