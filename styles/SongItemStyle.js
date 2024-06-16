import { StyleSheet } from 'react-native';

export const SongItemStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 10,
    },
    info: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 10,
        color: '#000'
    },
    artist: {
        fontSize: 14,
        color: '#666',
        paddingBottom: 10,
    },
})