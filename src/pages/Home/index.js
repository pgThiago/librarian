import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import bg from '../../assets/book_lover.svg';

import SvgUri from 'react-native-svg-uri';

function Home(){

    const { navigate } = useNavigation();

    function goToBookList(){
        navigate('BookList')
    }    
    
    return (
        <SvgUri source={require('../../assets/book_lover.svg')} style={styles.background}>
            <View style={styles.container}>
                <TouchableOpacity onPress={goToBookList} style={styles.button}>
                    <Text style={styles.buttonText}>Let's Read, Fell!</Text>
                </TouchableOpacity>
            </View>
        </SvgUri>
    )
}


const styles = StyleSheet.create({
    background: {
        width: 200,
        height: 200,
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

    },

    buttonText: {
        fontSize: 25,
        color: '#F0F0FF',
        fontFamily: 'monospace'
    }

})


export default Home;