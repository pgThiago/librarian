import React, { useState, useEffect } from 'react';
import { View, ImageBackground, StyleSheet, FlatList } from 'react-native';

import bg from '../../assets/book_lover.png';

import BookItem from '../../components/BookItem';

function BookList(){

    const [books, setBooks] = useState([]);


    useEffect(() => {
        
        async function getBooks(){
            const response = await (await fetch('https://cadbook.herokuapp.com/api/v1/books/')).json();
            setBooks(response.data);
        }

        getBooks();
            
    }, []); 
    
    return (
        <ImageBackground source={bg} style={styles.background}>
            <View style={styles.container}>
                <FlatList 
                    data={books}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) => (
                        <BookItem 
                            title={item.title}
                            author={item.user.name}
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
})


export default BookList;