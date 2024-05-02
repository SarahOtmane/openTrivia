import React, { useEffect, useState } from 'react';
import { Text, View, Button} from 'react-native';

import style from '../style.js';

const Quizz = ({Categorie, Difficulte}) =>{
    const [questions, setQuestions] = useState([]);

    useEffect(() =>{
        const getQuestions = async() =>{
            try {
                let response; 
                
                if(Difficulte != '-1'){
                    if(Categorie != '-1'){
                        response = await fetch(`https://opentdb.com/api.php?amount=15&category=${Categorie}&difficulty=${Difficulte}&type=multiple`);
                    }else{
                        response = await fetch(`https://opentdb.com/api.php?amount=15&difficulty=${Difficulte}&type=multiple`); 
                    }
                }else{
                    if(Categorie != '-1'){
                        response = await fetch(`https://opentdb.com/api.php?amount=15&category=${Categorie}&type=multiple`);
                    }else{
                        response = await fetch(`https://opentdb.com/api.php?amount=15&type=multiple`); 
                    }
                }

                const data = await response.json();
                setQuestions(data);

            } catch (error) {
                console.error('Erreur lors du fetch des questions : ', error);
            }
        }

        getQuestions();
    },[]);

    return(
        <View style={style.container}>
            <Text style={style.title}>Quizz Trivia</Text>
            
        </View>
    )
}

export default Quizz;