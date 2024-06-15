import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { FavoritesContext } from '../contexts/FavoritesContext';
import { FavoritesListScreenStyle as styles } from '../styles/FavoritesListScreenStyle';
import SongItem from '../components/SongItem';

const FavoritesListScreen = ({ navigation }) => {
    const { favorites, toggleFavorite } = useContext(FavoritesContext);

    const handleToggleFavorite = (song) => {
        toggleFavorite(song);
    };

    const renderFavoriteItem = ({ item }) => (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate('Detail', { song: item })}
        >
            <SongItem song={item} showFavoriteButton={false} />
            <TouchableOpacity
                style={styles.favoriteButton}
                onPress={() => handleToggleFavorite(item)}
            >
                <Text style={styles.buttonText}>Remove from Favorites</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            {favorites.length === 0 ? (
                <Text style={styles.emptyText}>No favorites yet. Add some songs to favorites!</Text>
            ) : (
                <FlatList
                    data={favorites}
                    renderItem={renderFavoriteItem}
                    keyExtractor={(item) => item.trackId.toString()}
                />
            )}
        </View>
    );
};

export default FavoritesListScreen;
