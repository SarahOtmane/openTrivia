import React from 'react';
import { Text, View, Button} from 'react-native';

import {Picker} from "@react-native-picker/picker";

import style from '../style.js';

const Reglages = ({Categorie, setCategorie, Difficulte, setDifficulte, getQuestions, setIndex, setScore}) =>{
    const changeDiff = (diff) =>{
        setDifficulte(diff); 
        change();
    }

    const changeCatego = (Catego) =>{
        setCategorie(Catego); 
        change();
    }

    const change = () =>{
        getQuestions();
        setIndex(0);
        setScore(0)
    }



    return(
        <View style={style.container}>
            <Text style={style.title}>Modifier vos réglages</Text>

            <View style={style.container}>
                <Text style={style.sousTitre} >Choisissez une catégorie.</Text>
                <Picker
                  selectedValue={Categorie}
                  mode={"dialog"}
                  onValueChange={(catego) => changeCatego(catego)}
                  style={style.picker}
                >
                    <Picker.Item label="Any Category" value="-1" />
                    <Picker.Item label="General Knowledge" value="9" />
                    <Picker.Item label="Entertainment: Books" value="10" />
                    <Picker.Item label="Entertainment: Music" value="12" />
                    <Picker.Item label="Entertainment: Film" value="11" />
                    <Picker.Item label="Entertainment: Musicals & Theatres" value="13" />
                    <Picker.Item label="Entertainment: Television" value="14" />
                    <Picker.Item label="Entertainment: Video Games" value="15" />
                    <Picker.Item label="Entertainment: Board Games" value="16" />
                    <Picker.Item label="Science & Nature" value="17" />
                    <Picker.Item label="Science: Computers" value="18" />
                    <Picker.Item label="Science: Mathematics" value="19" />
                </Picker>
            
                <Text style={[style.sousTitre, style.label]} >Choisissez la difficulté.</Text>
                <Picker
                  selectedValue={Difficulte}
                  mode={"dialog"}
                  onValueChange={(diff) => changeDiff(diff)}
                  style={style.picker}
                >
                    <Picker.Item label="Any Category" value="-1" />
                    <Picker.Item label="Easy" value="easy" />
                    <Picker.Item label="Medium" value="medium" />
                    <Picker.Item label="Hard" value="hard" />
                </Picker>
            </View>
        </View>
    )
}

export default Reglages;