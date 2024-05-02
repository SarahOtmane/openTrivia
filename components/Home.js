import React from 'react';
import { Text, View, Button } from 'react-native';

import style from '../style.js';
import { useNavigation } from '@react-navigation/native';


const Home = () =>{
    const navigation = useNavigation();

    return(
        <View style={style.container}>
            <Text style={style.title}>Quizz Trivia</Text>
            
            <View style={[style.container, style.regle]} >
                <Text style={style.sousTitre}>Règles du jeux : </Text>
                <Text style={style.regle}>
                    1. Toutes les questions de ce quizz seront à choix multiples
                </Text>
                <Text style={style.regle}>
                    2. Il y'a trois modes de difficultés (facile/moyen/difficile).
                    Par défaut, aucun mode n'est choisis donc vous aurez des questions des trois modes. Vous pouvez le modifier à tout moment dans les réglages.
                </Text>
                <Text style={style.regle}>
                    3. Il y'a plusieurs catégories différentes. Par défaut, vous avez des questions de toutes les catégories mais vous pouvez en séléctionner une dans les réglages.
                </Text>
                <Text style={style.regle}>
                    4. À chaque question vous aurez 4 réponse, seule une est correct.
                </Text>
                <Text style={style.regle}>
                    5. Votre score sera visible en haut de la page.
                </Text>
                <Button title="Commancer le jeux"
                    buttonStyle={style.button}
                    onPress={() => {
                        navigation.navigate('Quizz')
                    }}
                />
            </View>
        </View>
    )
}

export default Home;