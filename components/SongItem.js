import React from 'react';
import { View, Text, Button, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { SongItemStyle as styles } from '../styles/SongItemStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SongItem = ({ song, isFavorite, onToggleFavorite, onPress, showFavoriteButton = true }) => {
    const handleToggleFavorite = () => {
        onToggleFavorite(song);
    };

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={{ uri: song.artworkUrl100 }} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.title}>{song.trackName}</Text>
                <Text style={styles.artist}>{song.artistName}</Text>
                {showFavoriteButton && (
                    <TouchableOpacity style={styles.favoriteButton} onPress={handleToggleFavorite}>
                        {isFavorite ? (
                            <Ionicons name="heart" size={24} color="red" />
                        ) : (
                            <Ionicons name="heart-outline" size={24} color="black" />
                        )}
                    </TouchableOpacity>
                )}
            </View>
        </TouchableOpacity>
    );
};

export default SongItem;
