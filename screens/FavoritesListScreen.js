import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { FavoritesContext } from '../contexts/FavoritesContext';
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    itemContainer: {
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: 10,
    },
    favoriteButton: {
        marginTop: 10,
        padding: 10,
        backgroundColor: 'red',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    emptyText: {
        fontSize: 18,
        textAlign: 'center',
    },
});

export default FavoritesListScreen;
