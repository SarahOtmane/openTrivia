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

    button: {
        backgroundColor: '#000', // Couleur de fond du bouton
        marginTop: 20, 
    },
})