import React from 'react';
import { Text, View, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import style from '../style.js';


const Home = () =>{
    const navigation = useNavigation();

    return(
        <View style={style.container}>
            <Text style={style.title}>Quiz Trivia</Text>
            
            <View style={[style.container, style.regle]} >
                <Text style={style.sousTitre}>Règles du jeu : </Text>
                <Text style={style.regle}>
                    1. Toutes les questions de ce quiz seront à choix multiples.
                </Text>
                <Text style={style.regle}>
                    2.  Il y a trois modes de difficulté (facile/moyen/difficile).
                    Par défaut, aucun mode n'est choisi, donc vous aurez des questions des trois modes. Vous pouvez le modifier à tout moment dans les réglages.
                </Text>
                <Text style={style.regle}>
                    3. Il y a plusieurs catégories différentes. Par défaut, vous avez des questions de toutes les catégories, mais vous pouvez en sélectionner une dans les réglages.
                </Text>
                <Text style={style.regle}>
                    4. À chaque question, vous aurez 4 réponses, seule une est correcte.
                </Text>
                <Text style={style.regle}>
                    5. Votre score sera visible en haut de la page.
                </Text>
                <Button title="Commancer le jeu"
                    onPress={() => {
                        navigation.navigate('Quiz')
                    }}
                    color="#841584"
                />
            </View>
        </View>
    )
}

export default Home;