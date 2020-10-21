import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import bg from '../../assets/book_lover.png';


function Home(){

    const [books, setBooks] = useState([]);

    const { navigate } = useNavigation();

    function goToBookList(){
        navigate('BookList')
    }    

    useEffect(() => {
        
        async function getBooks(){
            const response = await (await fetch('https://cadbook.herokuapp.com/api/v1/books/')).json();
            setBooks(response.data);
        }

        getBooks();
            
    }, []); 

    if(books.length === 0){
        return(
            <View style={styles.loadingContainer}>
                <Text style={styles.loadingText}>Loading...</Text>
            </View>
        )
    }
    
    return (
        <ImageBackground source={bg} style={styles.background}>
            <View style={styles.container}>
                <TouchableOpacity onPress={goToBookList} style={styles.button}>
                <Text style={styles.buttonText}>{books.length} Books, let's read?</Text>
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
        borderRadius: 10,
        borderColor: "#6159E6",
        borderWidth: 1,
        
        width: '97%',
        height: '15%',

        
        alignItems: 'center',
        justifyContent: 'center',

        position: 'absolute',
        bottom: '23%',
        
        backgroundColor: '#F0F0FF',
        
        opacity: 0.9,
        elevation: 5,

    },

    buttonText: {
        fontSize: 25,
        color: '#6159E6',
        fontFamily: 'monospace'
    },

    loadingContainer: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
    },

    loadingText: {
        fontSize: 50, 
        fontFamily: 'monospace', 
        fontWeight: 'normal',
        color: '#6159E6',
    },
})


export default Home;