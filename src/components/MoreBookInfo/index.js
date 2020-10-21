import React from 'react';
import { Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { WebView } from 'react-native-webview';

import bg from '../../assets/book_lover.png';

import BookItem from '../BookItem';

function MoreBookInfo({ route }){

    const{ title, author, email, price, pages } = route.params;

    function buyButton(){
        alert("Sorry, we don't do that here.");
        return <WebView source={{ uri: 'https://github.com/pgThiago' }} />;
    }

    return (
        <ImageBackground source={bg} style={styles.background}>

            <BookItem 
                title={title}
                author={author}
                email={email}
                pages={pages}
                price={price}>

                {/*  BookItem Children  */}
                <Text style={styles.title}> Email: <Text style={styles.content}> {email} </Text> </Text>
                <Text style={styles.title}> Pages: <Text style={styles.content}> {pages} </Text> </Text>
                <Text style={styles.title}> Price: $<Text style={styles.content}> {price} </Text> </Text>
                {/*  BookItem Children  */}
            </BookItem>

            <TouchableOpacity style={styles.button} onPress={buyButton}>
                <Text style={styles.buttonText}>Buy</Text>
            </TouchableOpacity>
        
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    
    background: {
        flex: 1,
        resizeMode: "contain",
        alignItems: 'center',
    },

    title: {
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'monosoto',
        color: '#6159E6',
    },

    content: {
        fontSize: 20,
        fontFamily: 'monosoto',
        fontWeight: 'normal',
        color: '#6159E6',
    },

    button: {
        borderRadius: 10,
        borderColor: "#6159E6",
        
        width: '97%',
        height: '15%',
        
        alignItems: 'center',
        justifyContent: 'center',

        position: 'absolute',
        bottom: '40%',

        borderWidth: 1,
        borderColor: "#6159E6",
        
        backgroundColor: '#F0F0FF',
        
        opacity: 0.9,
        elevation: 5,
    },

    buttonText: {
        fontSize: 25,
        color: '#6159E6',
        fontFamily: 'monospace'
    }

})


export default MoreBookInfo;