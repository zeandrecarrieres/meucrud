import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'


import logoImg from '../../assets/logo.png'
import uvaImg from '../../assets/uva.png'
import garrafaImg from '../../assets/garrafa.png'

export default function Detail() {
    const navigation = useNavigation()

    function navigateBack() {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Image source={ uvaImg } />
                <Image source={ logoImg } style={styles.logo} />    
            </View>  
                <View style={styles.content}>
                    < View style={ styles.description}>

                        <Text style={styles.safra}>
                            2015
                        </Text>
                        <Text style={ styles.wineTitle}>
                            Casillero del Diablo
                        </Text>
                        <Text style={ styles.wineDescription}>
                            Concha y Toro
                        </Text>
                        <Text style={ styles.wineDescription}>
                            Tipo: Tinto
                        </Text>
                        <Text style={ styles.wineDescription}>
                            Origem: Chile
                        </Text>
{/*                         
                        <Text style={styles.obs}>
                            Um vinho excepcional. Ótima relação Custo X Beneficio. Para tomar no dia a dia. Frutado, boa acidez e teor de álcoo, com taninos leves e macios. Bela escolha pra hoje.
                            Bebido na data de 26/janeiro de 2020.
                        </Text> */}
                    </View>

                <View >
                    <Image source={ garrafaImg } style={styles.garrafa} />    
                </View> 

            </View>
            <TouchableOpacity onPress={navigateBack}><Text style={styles.voltar}>Voltar</Text></TouchableOpacity>          
                
        </View>

       
    )
}