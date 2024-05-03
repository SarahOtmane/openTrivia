import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './components/Home';
import Quizz from './components/Quizz';
import Reglages from './components/Reglages';
import { useState } from 'react';


const Tab = createBottomTabNavigator();

const App = () =>{
    //tableau qui stocke les questions
    const [questions, setQuestions] = useState([]);

    //index qui permet de parcourir le tableau ou je stocke les question 
    const [currentIndex, setCurrentIndex] = useState(0); 

    //index qui permet d'afficher le nb de questions auquelles on a repondu
    const [index, setIndex] = useState(0);

    const [Categorie , setCategorie]  = useState("-1");
    const [Difficulte , setDifficulte]  = useState("-1");


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

    return(
        <NavigationContainer>
            <Tab.Navigator 
                screenOptions={({route}) => ({
                    tabBarIcon:({focused, color, size}) =>{
                        let iconName;

                        if(route.name === 'Home'){
                            iconName = focused ? 'home' : 'home-outline';
                        }else if(route.name === 'Quiz'){
                            iconName = focused ? 'search' : 'search-outline';
                        }else if(route.name === 'Reglages'){
                            iconName = focused ? 'information-circle' : 'information-circle-outline';
                        }
                            return <Ionicons name={iconName} size={size} color={color} />
                        },
                        tabBarActiveTintColor : '#ba0d7b',
                        tabBarInactiveTintColor: '#333333'
                })}
            >
                <Tab.Screen 
                    name="Home" 
                    component={Home} 
                    options={{
                        title:"Accueil", 
                        headerStyle: {
                            backgroundColor: '#6d75b5'
                        }
                    }} 
                /> 

                <Tab.Screen 
                    name="Quiz" 
                    options={{
                        title:"Quiz", 
                        headerStyle: {
                            backgroundColor: '#6d75b5'
                        }
                    }}
                >
                    {() => <Quizz 
                        getQuestions={getQuestions}
                        questions={questions}
                        currentIndex={currentIndex}
                        setCurrentIndex={setCurrentIndex}
                        index={index}
                        setIndex={setIndex}
                    />}
                </Tab.Screen> 

                <Tab.Screen 
                    name="Reglages" 
                    options={{
                        title:"Réglages", 
                        headerStyle: {
                            backgroundColor: '#6d75b5'
                        }
                    }} 
                >
                    {() => <Reglages 
                        Categorie={Categorie} 
                        Difficulte={Difficulte} 
                        setCategorie={setCategorie}
                        setDifficulte={setDifficulte}
                        getQuestions={getQuestions}
                        setIndex={setIndex}
                    />}
                </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )
}


export default App;