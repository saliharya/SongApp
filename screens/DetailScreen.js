import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DetailScreen = ({ route }) => {
    const { song } = route.params;

    return (
        <View style={styles.container}>
            <Image source={{ uri: song.artworkUrl100 }} style={styles.image} />
            <Text style={styles.title}>{song.trackName}</Text>
            <Text style={styles.artist}>{song.artistName}</Text>
            <Text style={styles.album}>{song.collectionName}</Text>
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
    },
});

export default DetailScreen;
