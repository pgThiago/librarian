import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet, FlatList } from 'react-native';

import bg from '../../assets/book_lover.png';

import BookItem from '../../components/BookItem';

interface Book {
    id: string;
    user: {
        name: string;
        email: string;
    }
    title: string;
    price: string;
    pages: string;
}

const BookList: React.FC = () => {

    const [books, setBooks] = useState<Book[]>([]);

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
            <View>
                <FlatList 
                    data={books}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) => (
                        <BookItem 
                            title={item.title}
                            name={item.user.name}
                            email={item.user.email}
                            price={item.price}
                            pages={item.pages}
                        />
                    )}
                />
            </View>
        </ImageBackground>

    )
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: "cover",
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


export default BookList;