import { StyleSheet } from 'react-native';

export const SearchScreenStyle = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        marginBottom: 10,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        color: '#000',
    },
    header: {
        padding: 5,
        backgroundColor: '#f4f4f4',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    favoriteButton: {
        marginRight: 10,
        padding: 10,
    },
    noResultsText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#888',
        marginTop: 20,
    },
});
