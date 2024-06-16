import React, { useState, useContext, useEffect } from 'react';
import { View, TextInput, Button, SectionList, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FavoritesContext } from '../contexts/FavoritesContext';
import { SearchScreenStyle as styles } from '../styles/SearchScreenStyle';
import SongItem from '../components/SongItem';
import itunesApi from '../api/itunesApi';

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

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity style={styles.favoriteButton} onPress={() => navigation.navigate('Favorites')}>
                    <Ionicons name="heart" size={24} color="red" />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Search by song or artist"
                placeholderTextColor="#888"
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

export default SearchScreen;
