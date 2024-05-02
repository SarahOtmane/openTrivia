import { StyleSheet } from 'react-native';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    title: {
        fontSize: 45,
        fontWeight: 'bold',
        marginVertical: 20
    },

    sousTitre: {
        fontSize: 30,
        marginBottom: 50
    },

    regle: {
        padding: 20,
        textAlign: 'justify'
    },

    picker: {
        width: 250,
        height: 50,
        marginBottom: 100,
    },

    label: {
        marginTop: 100,
    },
})