import React from 'react';
import { Text, View, Image } from 'react-native';

import style from '../style.js';


const Home = () =>{
    return(
        <View style={style.container}>
            <Text style={style.title}>Quizz Trivia</Text>
            
            <View style={style.container}>
                <Text>Règles du jeux : </Text>
                <Text>
                    1. Toutes les questions de ce quizz seront à choix multiples
                </Text>
                <Text>
                    2. Il y'a trois modes de difficultés (facile/moyen/difficile).
                    Par défaut, aucun mode n'est choisis donc vous aurez des questions des trois modes. Vous pouvez le modifier à tout moment dans les réglages.
                </Text>
                <Text>
                    3. Il y'a plusieurs catégories différentes. Par défaut, vous avez des questions de toutes les catégories mais vous pouvez en séléctionner une dans les réglages.
                </Text>
                <Text>
                    4. À chaque question vous aurez 4 réponse, seule une est correct.
                </Text>
                <Text>
                    5. Votre score sera visible en haut de la page.
                </Text>
            </View>
        </View>
    )
}

export default Home;