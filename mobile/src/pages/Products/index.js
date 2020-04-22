import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Image, Text, FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native'

import api from '../../services/api'

import logoImg from '../../assets/logo.png'
import uvaImg from '../../assets/uva.png'
import vinhoImg from '../../assets/vinho.png'

import styles from './styles'

export default function Products() {
    const [products, setProducts] = useState([])
    const navigation = useNavigation()

    function navigateToDetail() {
        navigation.navigate('Detail')
    }

    async function loadProducts(){
       const response = await api.get('profile')

       setProducts(response.data) 
    }

    useEffect(() => {
            loadProducts()
    }, [])

    return (
        <View style={styles.container}> 
           <View style={styles.header}>
                <Image source={ logoImg } style={styles.logo} />
                <Image source={ uvaImg } />
            </View>  
                <Text style={styles.headerola}>
                Bem vindo, usuário!
                </Text>
                <Text style={styles.voceTem}>
                Você tem hoje X vinhos arquivados.
                </Text>
            <View style={styles.headerList}>   
                <Text style={styles.headerItem}>
               últimos vinhos
                </Text>
                <Text style={styles.headerItem1}>
                TOTAL de <Text style={styles.headerTextBold}> 0 vinhos.</Text>
                </Text>
            </View> 
            
            <FlatList
                style={styles.productList}
                data={products}
                style={styles.product}
                keyExtractor={product => String(product.id) }
                showsVerticalScrollIndicator={ false }
                renderItem={({ item: product }) => (
                    <View style={styles.card}>              
                        <View style={styles.ImgProd}>
                            <Image source={ vinhoImg } />
                        </View>
                        < View style={ styles.description}>
                            <Text style={ styles.wineTitle}>
                                {product.wine}
                            </Text>
                            <Text style={ styles.wineDescription}>
                                {product.productor}
                            </Text>
                            <Text style={ styles.wineDescription}>
                                {product.type}
                            </Text>
                            <Text style={ styles.wineDescription}>
                            {product.obs}
                            </Text>
                            <View>
                        <TouchableOpacity
                        style={styles.detailsButton}
                        onPress={navigateToDetail}
                        >
                            <Text style={styles.detailsButtonText}>+ detalhes</Text>    
                        </TouchableOpacity>
                    </View>
                        </ View>        
                        <View >
                        <Text style={styles.safra}>
                            {product.harvest}
                        </Text>
                        
                        </View>
                          
                    </View>
                   
                    
                    
                )}
                
            />

           
            


               


                
           


           
        </View>
    )
}