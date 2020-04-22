import { StyleSheet } from 'react-native'
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 26,
        paddingTop: Constants.statusBarHeight + 10,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerola: {
        fontSize: 26,
        color: '#4B4B4B',
        fontWeight: "600"
    },

    voceTem: {
        fontSize: 14,
        color: '#686868', 
    },

    productList: {
        marginHorizontal: -10,
    },

    headerList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 30,  
        alignItems: 'center',
      
        
    },

    headerItem: {
        fontSize: 24,
        fontWeight: "100",
        color: '#6C0000',
    },

    headerItem1: {
        fontSize: 18,
        fontWeight: "100",
        color: '#686868',
    },

    headerTextBold: {
        fontWeight: "bold",
    },

    description: {
        flexDirection: 'column',
       
    },

    card: {
        marginTop: 10,
        marginHorizontal: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        paddingVertical: 20,
        borderRadius:20,
        backgroundColor: '#AAAAAA',
    },

    wineTitle: {
        color: '#FDFDFD',
        fontSize: 18,
        fontWeight: '100',

    },

    safra: {
        fontSize: 31,
        marginTop: -15,
        color: '#BAB7B7',
        fontWeight: "bold",
    },

    wineDescription: {
        color: '#F0F0F0',
    },



})
 
  