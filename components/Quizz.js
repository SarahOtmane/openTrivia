import React, { useEffect, useState } from 'react';
import { Text, View, ActivityIndicator, Button} from 'react-native';
import { decode } from 'he';

import style from '../style.js';


const Quizz = ({getQuestions, questions, currentIndex, setCurrentIndex, index, setIndex, score, setScore}) =>{
    //recup la reponse selectionnée pour chaque question
    const [selectedAnswer, setSelectedAnswer] = useState(null);


    useEffect(() =>{ 
        getQuestions() ;
    },[]);

    //fonction qui permet de mélanger la bonne réponse avec les mauvaises
    const malangeAnswer = (answers) => {
        const melangeAnswer = [...answers].sort(() => Math.random() - 0.5);
        return melangeAnswer;
    }

    //fonction qui permet de récupérer la réponse sélectionnée et de l'enreg dans le state
    const recupAnswer = (answer) =>{ 
        setSelectedAnswer(answer);
    }

    //fonction qui permet de passer à la question suivante
        //met a jour le score
        //elle remet a null la reponse choisis
        //modifier l'index de la question actuelle
        //Si index est inferieur a 15, on passe a la question suivante
        //sinon on recupere 15 nouvelles questions
    const nextQuestion = () =>{
        //mettre a jour le score si la reponse est bonne
        if(selectedAnswer == questions[currentIndex].correct_answer) setScore(prevIndex => prevIndex + 1);

        //mettre le state qui gere la reponse selection a null
        setSelectedAnswer(null);

        //passer a la question suivante si on a pas encore atteint les 15questions
        //sinon continuer la partie en recuperant 15 autres questions
        if(index+1<questions.length){
            setIndex(prevIndex => prevIndex + 1);
            setCurrentIndex(prevCurrentIndex => prevCurrentIndex + 1);
        }else{
            setIndex(prevIndex => prevIndex + 1);
            getQuestions(); 
        }
    }


    //si les questions ne sont pas encore chargées, on affiche un message d'attente
    if(questions.length === 0){
        return(
            <View style={style.container}>
                <Text style={{marginBottom: 20}}>Un peu de patience ...</Text>
                <ActivityIndicator color={style.color} size='large' />
            </View>
        )
    }else{
        //Récup la question actuelle
        const currentQuestion = questions[currentIndex];
        const answers = malangeAnswer([...currentQuestion.incorrect_answers, currentQuestion.correct_answer]);
        return(
            <View style={style.container}>
                <Text>Votre score est à : {score}</Text>
                <Text style={style.title} >Question n°{index+1} : </Text>
                <Text style={style.question} >{decode(currentQuestion.question)}</Text>
                {answers.map((answer, index) => (
                    <Button 
                        key={index}
                        title={decode(answer)} 
                        onPress={() => recupAnswer(answer)} 
                        disabled={selectedAnswer !== null}
                    />
                ))}
                <Button 
                    title="Suivant" 
                    onPress={nextQuestion} 
                    disabled={selectedAnswer === null}
                    color="#841584"
                />
            </View>
        )
    }
}

export default Quizz;