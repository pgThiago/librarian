import React from 'react';
import {  Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

import bg from '../../assets/book_lover.png';

import BookItem from '../BookItem';

interface BookItemInfo {
    name: string;
    email: string;
    title: string;
    price: string;
    pages: string;
}

function MoreBookInfo(){

    const { navigate } = useNavigation();
    const route = useRoute();
 
    const { name, email, title, price, pages } = route.params as BookItemInfo;

    function buyButton(){
        alert(`Sorry, we don't do that here. Check out the code.`);
        setTimeout(() => {
            navigate('RepoView');
        }, 4000)
    }

    return (
        <ImageBackground source={bg} style={styles.background}>
            
            <BookItem 
                title={title}
                name={name}
                email={email}
                pages={pages}
                price={price}
            />

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
        borderWidth: 1,
        
        width: '97%',
        height: '15%',
        
        alignItems: 'center',
        justifyContent: 'center',

        position: 'absolute',
        bottom: '40%',
        
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