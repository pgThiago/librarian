import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Ionicons';

function BookItem({ title, author, email, pages, price, children }){

    const { navigate } = useNavigation();

    function moreInfomationsAboutBook(){
        navigate('MoreBookInfo', { title, author, email, pages, price });
    }
    
    return (
        <RectButton onPress={moreInfomationsAboutBook}>
            <View style={styles.container}>
        
                <Icon name="book" size={40} color="#FFF" style={styles.bookIcon} />

                <Text style={styles.title}> Title:  <Text style={styles.content}> {title}  </Text> </Text>
                <Text style={styles.title}> Author: <Text style={styles.content}> {author} </Text> </Text>

                { children } 

            </View>
        </RectButton>
    )
}


const styles = StyleSheet.create({
   
    container: {
        width: '95%',
        height: 250,
        
        justifyContent: "center",
        alignSelf: 'center',
        
        marginTop: 10,
        marginBottom: 2,
        
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 10,
        paddingLeft: 10,

        borderWidth: 1,
        borderRadius: 7,
        borderColor: "#6159E6",

        backgroundColor: '#34325E',

        opacity: 0.9,
        elevation: 5,

    },

    bookIcon: {
        position: 'absolute',
        top: 5,
        right: 7,
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
    }

})


export default BookItem;