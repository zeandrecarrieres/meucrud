import React, { useState, useEffect } from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

import api from '../../services/api'

import uvaImg from '../../assets/uva.svg'
import logoImg from '../../assets/logo.svg'
import vinhoImg from '../../assets/bola_vinho.png'


export default function Products() {
    const [products, setProducts] = useState([])
    
    const userId = localStorage.getItem('userId')
    const userName = localStorage.getItem('userName')

    useEffect(()=>{
        api.get('profile', {
        headers: {
            Authorization: userId,   
            }
        }).then(response => {
            setProducts(response.data)
        })

    }, [userId] ) //dentro do [] não necessariamente precisa o userId, pois não variará o user sem outro login.

    async function handleDeleteProduct(id) {
        try {
            await api.delete(`products/${id}`, {
                headers: {
                    Authorization: userId,
                }
            }) 

          setProducts(products.filter(products => products.id !== id))  
        } catch (err) {
            alert('Erro ao deletar produto, tente novamente.')
        }
    }

    return (

    <div className="container">
        <header>
           
            <img src={ logoImg} alt="logo"/>
            <img src={ uvaImg} alt="uva"/>
           
            
        </header>
        
        <div className="inter">
            <div className="saudation">
                <p>Bem-vindo, { userName}.</p>
                você tem hoje 8 vinhos    
            </div> 
            <Link to="/product/new">
                <button className="button_add">+</button>   
            </Link>
             
        </div>
         
     

      
    
        <ul className="lista">
            <div className="head_prod">
                <h2>últimos vinhos</h2>
                <h3>TOTAL: 08 vinhos</h3>
            </div>
       
          {products.map(products => ( //nao usa as{} pois não vai usar o return - Arrow
                <li key={products.id} className="item">
                <img id="foto_produto"src={vinhoImg} alt="vinho"/>
                <div className="details">
                   
                    <div className="description">
                        <h4>{products.wine}</h4>
                        <h5>{products.productor}</h5>
                        <h5>{products.type}</h5>
                        <h5>{products.obs}</h5>
                    </div>
                    
                </div>
                    <div className="safra">
                        {products.harvest}
                    </div>
                    <button onClick={()=>handleDeleteProduct(products.id)} id="trash">
                        <Link to="/products/new">-</Link>
                    </button>
            </li>
            

          ))}

        </ul>
    </div>
    )
}
