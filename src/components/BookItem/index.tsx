import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Ionicons';
import { useRoute } from '@react-navigation/native';

interface Book {
    name: string;
    email?: string;
    title: string;
    price?: string;
    pages?: string;
}

const BookItem: React.FC<Book> = ({ title, name, email, pages, price }) => {

    const { navigate } = useNavigation();
    const route = useRoute();

    const { name: pageName } = route;

    function moreInfomationsAboutBook(){
        navigate('MoreBookInfo', { title, email, name, pages, price });
    }
    
    return (
        <RectButton onPress={moreInfomationsAboutBook}>
            { 
                pageName === 'BookList' ? (
                    <View style={styles.container}>
        
                        <Icon name="book" size={40} color="#6159E6" style={styles.bookIcon} />

                        <Text style={styles.title}> Title:  <Text style={styles.content}> {title}  </Text> </Text>
                        <Text style={styles.title}> Author: <Text style={styles.content}> {name} </Text> </Text>

                    </View>
                ) :
                (
                    <View style={styles.container}>
                        <Icon name="book" size={40} color="#6159E6" style={styles.bookIcon} />

                        <Text style={styles.title}> Title:  <Text style={styles.content}> {title}  </Text> </Text>
                        <Text style={styles.title}> Author: <Text style={styles.content}> {name} </Text> </Text>
                        <Text style={styles.title}> Email: <Text style={styles.content}> {email} </Text> </Text>
                        <Text style={styles.title}> Pages: <Text style={styles.content}> {pages} </Text> </Text>
                        <Text style={styles.title}> Price: $<Text style={styles.content}> {price} </Text> </Text>
                    </View>
                )
            }
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
        borderRadius: 10,
        borderColor: "#6159E6",

        backgroundColor: '#F0F0FF',

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
        color: '#6159E6',
    },

    content: {
        fontSize: 20,
        fontFamily: 'monosoto',
        fontWeight: 'normal',
        color: '#6159E6',
    }

})


export default BookItem;