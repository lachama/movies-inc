import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './MoviesListScreenStyles';
import MovieListItem from '../../components/MoviesListItem/MovieListItem';
import MoviesListItemSeparator from '../../components/MoviesListItemSeparator/MovieListItemSeparator';
import {mapMovieData} from '../../utils/utils';
import {getMovies} from '../../data/Api';
import {Constants} from '../../utils/constants';

const MoviesListScreen = ({navigation}) => {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const buildMovieList = async () => {
      const moviesData = await getMovies();
      const mappedData = mapMovieData(moviesData?.results || []);
      setMoviesList(mappedData);
    };
    buildMovieList();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{Constants.STREAM_NOW}</Text>
      <FlatList
        data={moviesList}
        renderItem={({item}) => (
          <MovieListItem navigation={navigation} movie={item} />
        )}
        ItemSeparatorComponent={MoviesListItemSeparator}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default MoviesListScreen;
