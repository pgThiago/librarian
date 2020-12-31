import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import api from '../../services/api';

interface Book {
    id: string;
    user: {
        name: string;
        email: string;
    }
    title: string;
    price: string;
    pages: string;
    imgUri: string;
}

const BookList: React.FC = () => {

    const [books, setBooks] = useState<Book[]>([]);
    const [bookSelected, setBookSelected] = useState({
        imgUri: '', price: '', pages: '', title: '', user: {email: '', name: ''}
    });

    useEffect(() => {
        api.get('books').then(response => {
            const { data: books } = response.data;
            setBooks(books);            
        })
    }, []);

    function handleBookSelected(itemId: any){
        const book = books.filter(item => {
            return item.id === itemId ? item : null;
        });
        setBookSelected({
            imgUri: book[0].imgUri, price: book[0].price, pages: book[0].pages, title: book[0].title, user: {email: book[0].user.email, name: book[0].user.name}
        });        
    }

    useEffect(() => {
        for(let i = 0; i < books.length; i++){
            books[i].imgUri = `https://picsum.photos/700/700?random=${i}`;
        }
    })
    
    if(books.length === 0){
        return(
            <View style={styles.loadingContainer}>
                <Text style={styles.loadingText}>Loading...</Text>
            </View>
        )
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.appTitle}>Librarian</Text>
            { bookSelected.price != '' && (
                <View style={styles.bookSelected}>
                    <Image style={styles.imgBookSelected} source={{ uri: bookSelected.imgUri }}></Image>
                    <View style={styles.textContentBookSelected}>
                        <Text style={styles.textPriceBookSelected}>${bookSelected.price}</Text>
                        <Text style={styles.textTitleBookSelected}>{bookSelected.title}</Text>
                        <Text style={styles.textAuthorBookSelected}>{bookSelected.user.name}</Text>
                        <Text style={styles.textPagesBookSelected}>{bookSelected.pages} pages</Text>
                        <Text style={styles.textEmailBookSelected}>{bookSelected.user.email}</Text>
                    </View>
                </View>
            ) }
                <FlatList 
                    style={styles.bookContainer}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={books}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) => (
                        <RectButton onPress={() => {handleBookSelected(item.id)}} style={styles.bookContent}>
                            <Image style={styles.imgBook} source={{ uri: item.imgUri }}></Image>
                            <View style={styles.textContent}>
                                <Text style={styles.textTitle}>{item.title}</Text>
                            </View>
                        </RectButton>                        
                    )}
                />
        </View>
    )
}

const styles = StyleSheet.create({    

    container: {
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: '#FFF',
    },

    appTitle: {
        fontSize: 25,
        marginTop: 10,
        fontFamily: 'normal',
        color: '#5c5c5c',
    },
    
    bookSelected: {
        width: '95%',
        height: '60%',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F0F4',
        borderRadius: 10,
    },

    imgBookSelected: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginTop: -10,
    },

    textTitleBookSelected: {
        color: '#5c5c5c',
        fontSize: 20,
        fontFamily: 'monosoto',
        fontWeight:'bold',
        marginBottom: 5,
    },
    textPriceBookSelected: {
        color: '#6ABCB0',
        fontSize: 25,
        fontFamily: 'monosoto',
        marginBottom: 5,
    },

    textAuthorBookSelected: {
        color: '#5c5c5c',
        fontSize: 18,
        fontFamily: 'monosoto',
        fontWeight: 'bold',
        marginBottom: 5,
    },

    textPagesBookSelected: {
        color: '#5c5c5c',
        fontSize: 16,
        fontFamily: 'monosoto',
        marginBottom: 5,
    },

    textEmailBookSelected: {
        color: '#5c5c5c',
        fontSize: 16,
        fontFamily: 'monosoto',
        marginBottom: 5,
    },

    textTitle: {
        fontSize: 16,
        fontFamily: 'monosoto',
        marginBottom: 5,
        color: '#5c5c5c',
    },

    bookContainer: {        
        alignSelf: 'center',
        marginTop: 10,
    },
    
    bookContent: {
        justifyContent: 'center',
        alignItems: 'center',
        
        width: 200,
        height: 200,

        marginRight: 10,
        marginLeft: 10,
        borderRadius: 10,
        backgroundColor: '#F0F0F4',
    },

    textContentBookSelected: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        
        width: '95%',
        height: 150,
        
        marginTop: 20,
        padding: 5,
    },

    textContent: {
        justifyContent: 'center',
        alignItems: 'center',
        
        width: 170,
        height: 100,
        
        marginTop: 5,
        padding: 10,
    },

    imgBook: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginTop: 20,
    },

    loadingContainer: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center',
    },

    loadingText: {
        fontSize: 25, 
        fontFamily: 'monospace', 
        fontWeight: 'normal',
    },
})


export default BookList;