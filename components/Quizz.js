import React, { useEffect, useState } from 'react';
import { Text, View, ActivityIndicator, Button} from 'react-native';

import style from '../style.js';

const Quizz = ({Categorie, Difficulte}) =>{
    //tableau qui stocke les questions
    const [questions, setQuestions] = useState([]);

    //index qui permet de parcourir le tableau ou je stocke les question 
    const [currentIndex, setCurrentIndex] = useState(0); 
    
    //index qui permet d'afficher le nb de questions auquelles on a repondu
    const [index, setIndex] = useState(0);

    //recup la reponse selectionnée pour chaque question
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const [score, setScore] = useState(0);

    //Récup les 15 questions depuis l api externe
    //Si l utilisateur n'a pas choisis de categorie donc categorie = -1 (pareil pour la diff)
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

            if (data.results && data.results.length > 0) {
                setQuestions(data.results);
                setCurrentIndex(0); 
            } else {
                console.error('Erreur: Aucune question retournée depuis l\'API');
            }

        } catch (error) {
            console.error('Erreur lors du fetch des questions : ', error);
        }
    }

    useEffect(() =>{ 
        getQuestions() ;
    },[Categorie, Difficulte]);

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
                <Text>{currentQuestion.question}</Text>
                {answers.map((answer, index) => (
                    <Button 
                        key={index}
                        title={answer} 
                        onPress={() => recupAnswer(answer)} 
                        disabled={selectedAnswer !== null}
                    />
                ))}
                <Button 
                    title="Suivant" 
                    onPress={nextQuestion} 
                    disabled={selectedAnswer === null}
                />
            </View>
        )
    }
}

export default Quizz;