import React from 'react';
import { View, Text, Button, TouchableOpacity, Image, StyleSheet } from 'react-native';

const SongItem = ({ song, isFavorite, onToggleFavorite, onPress }) => {
    const handleToggleFavorite = () => {
        onToggleFavorite(song);
    };

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={{ uri: song.artworkUrl100 }} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.title}>{song.trackName}</Text>
                <Text style={styles.artist}>{song.artistName}</Text>
                <Button
                    title={isFavorite ? "Unfavorite" : "Favorite"}
                    onPress={handleToggleFavorite}
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    info: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    artist: {
        fontSize: 14,
        color: '#666',
    },
});

export default SongItem;
