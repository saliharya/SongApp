import { StyleSheet } from 'react-native';

export const DetailScreenStyle = StyleSheet.create({
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
})