import React, { useEffect, useState } from 'react';
import { Text, View, ActivityIndicator, FlatList} from 'react-native';

import style from '../style.js';

const Quizz = ({Categorie, Difficulte}) =>{
    const [questions, setQuestions] = useState([]);
    const [index, setIndex] = useState(1);

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
                setQuestions(data.results);

            } catch (error) {
                console.error('Erreur lors du fetch des questions : ', error);
            }
        }

        getQuestions() 
    },[]);

    if(questions.length === 0){
        return(
            <View style={style.container}>
                <Text style={{marginBottom: 20}}>Un peu de patience ...</Text>
                <ActivityIndicator color={style.color} size='large' />
            </View>
        )
    }else{
        return(
            <View style={style.container}>
                {/* <FlatList
                    data={questions}
                    keyExtractor={(item, index) => index.toString()} 
                    renderItem={({item}) =>(
                        <View style={style.container}>
                            <Text>{item.question}</Text>
                        </View>
                    )}
                /> */}
            </View>
        )
    }
}

export default Quizz;