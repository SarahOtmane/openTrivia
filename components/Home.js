import React from 'react';
import { Text, View, Image } from 'react-native';

import style from '../style.js';


const Home = () =>{
    return(
        <View style={style.container}>
            <Text style={style.title}>Bienvenue</Text>
            <View style={style.plage_container} >
                <Text>Rendez vous à la plage</Text>
                <Image style={style.plage_image} source={require('../assets/plage.jpeg')} />
            </View>
        </View>
    )
}

export default Home;