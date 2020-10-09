import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import bg from '../../assets/book_lover.png';


function Home(){

    const { navigate } = useNavigation();

    function goToBookList(){
        navigate('BookList')
    }    
    
    return (
        <ImageBackground source={bg} style={styles.background}>
            <View style={styles.container}>
                <TouchableOpacity onPress={goToBookList} style={styles.button}>
                    <Text style={styles.buttonText}>Let's Read, Fella!</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: "contain"
    },

    container: {
        flex: 1,
        alignItems: 'center',
    },

    button: {
        borderRadius: 20,
        borderColor: "#6159E6",
        
        width: '97%',
        height: '15%',
        
        alignItems: 'center',
        justifyContent: 'center',

        position: 'absolute',
        bottom: '23%',
        
        backgroundColor: '#34325E',
        
        opacity: 0.9,
        elevation: 5,

    },

    buttonText: {
        fontSize: 25,
        color: '#F0F0FF',
        fontFamily: 'monospace'
    }

})


export default Home;