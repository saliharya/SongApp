import React, { useContext } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import SongItem from '../components/SongItem';
import { FavoritesContext } from '../contexts/FavoritesContext';

const FavoritesScreen = ({ navigation }) => {
    const { favorites, toggleFavorite } = useContext(FavoritesContext);

    return (
        <View style={styles.container}>
            <FlatList
                data={favorites}
                keyExtractor={(item) => item.trackId.toString()}
                renderItem={({ item }) => (
                    <SongItem
                        song={item}
                        isFavorite={true}
                        onToggleFavorite={toggleFavorite}
                        onPress={() => navigation.navigate('Detail', { song: item })}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
});

export default FavoritesScreen;
