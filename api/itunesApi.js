import axios from 'axios';

const searchSongs = async (term) => {
    const url = `https://itunes.apple.com/search?term=${encodeURIComponent(term)}&media=music&limit=30`;
    try {
        const response = await axios.get(url);
        return response.data.results;
    } catch (error) {
        console.error('Error fetching data from iTunes API', error);
        throw error;
    }
};

export default { searchSongs };
