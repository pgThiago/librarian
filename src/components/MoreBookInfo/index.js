import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

import bg from '../../assets/book_lover.png';

import BookItem from '../BookItem';

function MoreBookInfo({ route }){

    const{ title, author, email, price, pages } = route.params;

    function buyButton(){
        alert("Sorry, we don't do that here.");
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
        resizeMode: "cover",
    },

    title: {
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'monosoto',
        color: '#F0F0FF',
    },

    content: {
        fontSize: 20,
        fontFamily: 'monosoto',
        fontWeight: 'normal',
        color: '#F0F0FF',
    },

    button: {
        width: '97%',
        height: 90,
        
        justifyContent: "center",
        alignItems: 'center',
        alignSelf: 'center',
        
        marginTop: 10,
        marginBottom: 2,
        
        padding: 7,

        borderWidth: 2,
        borderRadius: 20,
        borderColor: "#6159E6",
        backgroundColor: '#34325E',
    },

    buttonText: {
        fontSize: 40,
        color: '#F0F0FF',
        fontFamily: 'monospace',
        fontWeight: 'bold',
        
    }

})


export default MoreBookInfo;