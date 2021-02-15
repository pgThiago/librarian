import React, { useState, useEffect, ReactText  } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';

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
    
    const [inputText, setInputText] = useState("");

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

    function handleBookSelected(itemId: string){
        const book = books.filter(item => {
            return item.id === itemId ? item : null;
        });
        setBookSelected({
            imgUri: book[0].imgUri, price: book[0].price, pages: book[0].pages, title: book[0].title, user: {email: book[0].user.email, name: book[0].user.name}
        });        
    }

    function handleSearchBook(inputParam: string){
        setInputText(inputParam);
        for(const book of books){
            if(book.title.toLowerCase().includes(inputText.toLowerCase())){
                console.log(inputText.toLowerCase());
                setBookSelected({
                    imgUri: book.imgUri, price: book.price, pages: book.pages, title: book.title, user: {email: book.user.email, name: book.user.name}
                });
            }        
        }        
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
            <TextInput
                placeholder="Search"
                value={inputText}
                onChangeText={(text: ReactText) => handleSearchBook(text.toString()) }
                style={styles.inputSearch}
            />
            { bookSelected.price != '' ? (
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
            ) : (
                <View style={styles.bookSelected}>
                    <View style={styles.textContentBookSelected}>
                        <Text style={styles.textPriceBookSelected}></Text>
                        <Text style={styles.textTitleBookSelected}></Text>
                        <Text style={styles.textAuthorBookSelected}></Text>
                        <Text style={styles.textPagesBookSelected}></Text>
                        <Text style={styles.textEmailBookSelected}></Text>
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
        backgroundColor: '#F0F0F4',
        alignItems: 'center',
        justifyContent: 'center',
    },

    appTitle: {
        fontSize: 25,
        marginTop: 5,
        fontFamily: 'normal',
        color: '#5c5c5c',

        alignSelf: 'center',
    },

    inputSearch: {
        borderBottomColor: '#5c5c5c',
        borderBottomWidth: 0.2,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderStartWidth: 2,
        marginBottom: 10,

        fontSize: 16,

        alignSelf: 'center',
    },
    
    bookSelected: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '95%',
        height: 390,
        marginTop: 1,
        backgroundColor: '#F0F0F4',
        borderRadius: 5,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 20,
    },

    imgBookSelected: {
        width: 200,
        height: 200,
        borderRadius: 5,
    },

    bookContainer: {        
        alignSelf: 'center',
        marginTop: 10,
    },
    
    bookContent: {
        justifyContent: 'center',
        alignItems: 'center',
        
        width: 200,
        height: 190,

        marginRight: 10,
        marginLeft: 10,
        borderRadius: 5,
        backgroundColor: '#FFF',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,

        elevation: 20,
    },

    textContentBookSelected: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        
        width: '95%',
        height: 150,
        
        marginTop: 10,
        padding: 5,
    },

    textContent: {
        justifyContent: 'center',
        alignItems: 'center',
        
        width: 170,
        height: 100,
        
        marginTop: 0,
        padding: 10,
    },

    imgBook: {
        width: 100,
        height: 100,
        borderRadius: 5,
        marginTop: 20,
    },

    textTitleBookSelected: {
        color: '#000',
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

    loadingContainer: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center',
    },

    loadingText: {
        fontSize: 20, 
        fontFamily: 'monospace', 
        fontWeight: 'normal',
        color: '#5c5c5c',
    },
})

export default BookList;