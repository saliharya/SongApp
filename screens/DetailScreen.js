import React, { useState, useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { FavoritesContext } from '../contexts/FavoritesContext';
import { DetailScreenStyle as styles } from '../styles/DetailScreenStyle';

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

export default DetailScreen;
