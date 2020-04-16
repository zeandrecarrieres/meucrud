import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import './styles.css'

import api from '../../services/api'

import uvaImg from '../../assets/uva.svg'
import logoImg from '../../assets/logo.svg'


export default function Register() {
    const [productor, setProductor ] = useState('')
    const [wine, setWine] = useState('')
    const [harvest, setHarvest] = useState('')
    const [type, setType ] = useState('')
    const [obs, setObs] = useState('')

    const history=useHistory()

    const userId = localStorage.getItem('userId')

    async function handleNewProduct(e) {
       e.preventDefault()

       const data = {
           productor,
           wine,
           harvest,
           type,
           obs
       }
       
       try{
            await api.post('products', data, {
                headers: {
                    Authorization: userId,
                }
            })

            history.push('/products')
       } catch (err) {
            alert('Erro ao cadastrar o produto, por favor, tente novamente.')
       }

        
    }
    
    return (
        <div className="container">
            <div className="marca">
                <img src={uvaImg} alt="logo"/>
                <img src={ logoImg } alt="logo"/>
            </div>
            <section className="form">
                <form onSubmit={handleNewProduct}>
                    <h1>Incluir mais um vinho</h1>   
                    <input 
                    placeholder="produtor"
                    value={productor}
                    onChange={e => setProductor(e.target.value)}
                    />
                    <input 
                    placeholder="nome do vinho"
                    value={wine}
                    onChange={e => setWine(e.target.value)}
                    />
                    <input 
                    placeholder="safra"
                    value={harvest}
                    onChange={e => setHarvest(e.target.value)}
                    />
                    <input 
                    placeholder="tipo"
                    value={type}
                    onChange={e => setType(e.target.value)}
                    />
                    <input 
                    placeholder="país de origem"
                    value={obs}
                    onChange={e=> setObs(e.target.value)}
                    />
                    <button type="submit" className="button">CADASTRAR</button>
                    <Link to ="/products">
                        < FiArrowLeft size={16} alt="sair"/>
                        voltar para o produtos</Link>
                </form> 
            </section>



             


        </div>    

    )
}