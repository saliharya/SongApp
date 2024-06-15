import React, { useState, useContext } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FavoritesContext } from '../contexts/FavoritesContext';

const DetailScreen = ({ route }) => {
    const { song } = route.params;
    const { favorites, toggleFavorite } = useContext(FavoritesContext);
    const [isFavorite, setIsFavorite] = useState(favorites.some(fav => fav.trackId === song.trackId));

    const handleToggleFavorite = () => {
        toggleFavorite(song);
        setIsFavorite(!isFavorite);
    };

    return (
        <View style={styles.container}>
            <Image source={{ uri: song.artworkUrl100 }} style={styles.image} />
            <Text style={styles.title}>{song.trackName}</Text>
            <Text style={styles.artist}>{song.artistName}</Text>
            <Text style={styles.album}>{song.collectionName}</Text>

            <TouchableOpacity
                style={[styles.favoriteButton, { backgroundColor: isFavorite ? 'red' : 'grey' }]}
                onPress={handleToggleFavorite}
            >
                <Text style={styles.buttonText}>{isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    artist: {
        fontSize: 18,
        color: '#666',
    },
    album: {
        fontSize: 16,
        color: '#888',
        marginBottom: 20,
    },
    favoriteButton: {
        marginTop: 10,
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'grey',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default DetailScreen;
