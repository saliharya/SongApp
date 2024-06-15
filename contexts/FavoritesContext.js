import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const favoriteList = await AsyncStorage.getItem('favorites');
        setFavorites(favoriteList ? JSON.parse(favoriteList) : []);
      } catch (error) {
        console.error('Error loading favorites', error);
      }
    };

    loadFavorites();
  }, []);

  const toggleFavorite = async (song) => {
    let updatedFavorites = [...favorites];
    if (favorites.some(fav => fav.trackId === song.trackId)) {
      updatedFavorites = updatedFavorites.filter(fav => fav.trackId !== song.trackId);
    } else {
      updatedFavorites.push(song);
    }
    setFavorites(updatedFavorites);
    await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
