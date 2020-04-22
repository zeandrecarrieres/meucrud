import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        
        
    },

    header: {
        alignItems: 'center',
        paddingTop: 30,
        alignItems:'center',
    },

    logo: {
        marginTop: 20,
    },

    content: {
        marginTop: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 25,
        padding: 20,
        paddingTop: 100,
        backgroundColor: '#E9E9E9',
        borderRadius: 20,
        

    },

    description: {
        paddingHorizontal: 0,
        
    },

    safra: {
        marginTop: 150,
        fontSize: 46,
        fontWeight: 'bold',
        color: '#DEDEDE',
    },

    wineTitle: {
        fontSize: 20,
        color: '#444444',

    },

    wineDescription: {
        fontSize: 12,
        color: '#A4A4A4',
    },

    voltar: {
        textAlign: 'right',
        marginRight: 30,
        marginTop: 10,
        color: '#6C0000'


    }

    
})