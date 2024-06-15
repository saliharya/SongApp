import React, { useState, useContext } from 'react';
import { View, TextInput, Button, SectionList, Text, StyleSheet, ActivityIndicator } from 'react-native';
import itunesApi from '../api/itunesApi';
import SongItem from '../components/SongItem';
import { FavoritesContext } from '../contexts/FavoritesContext';

const SearchScreen = ({ navigation }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [songs, setSongs] = useState([]);
    const [loading, setLoading] = useState(false);
    const { favorites, toggleFavorite } = useContext(FavoritesContext);

    const searchSongs = async () => {
        setLoading(true);
        try {
            const results = await itunesApi.searchSongs(searchTerm);
            setSongs(results);
        } catch (error) {
            console.error('Error fetching data from iTunes API', error);
        } finally {
            setLoading(false);
        }
    };

    const groupedSongs = songs.reduce((acc, song) => {
        const artist = song.artistName;
        if (!acc[artist]) {
            acc[artist] = [];
        }
        acc[artist].push(song);
        return acc;
    }, {});

    const sections = Object.keys(groupedSongs).map(artist => ({
        title: artist,
        data: groupedSongs[artist]
    }));

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Search by song or artist"
                value={searchTerm}
                onChangeText={setSearchTerm}
                style={styles.input}
            />
            <Button title="Search" onPress={searchSongs} />
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <SectionList
                    sections={sections}
                    keyExtractor={(item) => item.trackId.toString()}
                    renderItem={({ item }) => (
                        <SongItem
                            song={item}
                            isFavorite={favorites.some(fav => fav.trackId === item.trackId)}
                            onToggleFavorite={toggleFavorite}
                            onPress={() => navigation.navigate('Detail', { song: item })}
                        />
                    )}
                    renderSectionHeader={({ section: { title } }) => (
                        <View style={styles.header}>
                            <Text style={styles.headerText}>{title}</Text>
                        </View>
                    )}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        marginBottom: 10,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
    },
    header: {
        padding: 5,
        backgroundColor: '#f4f4f4',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default SearchScreen;
