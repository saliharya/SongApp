import { StyleSheet } from 'react-native';

export const FavoritesListScreenStyle = StyleSheet.create({
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
})