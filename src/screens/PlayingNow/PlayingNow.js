import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './PlayingNowStyles';
import MovieItem from '../../components/MovieItem/MovieItem';
import MovieItemSeparator from '../../components/MovieItemSeparator/MovieItemSeparator';
import {mapMovieData} from '../../utils/utils';
import {getNowPlayingMovies} from '../../data/api';
import {constants} from '../../utils/constants';

const PlayingNow = ({navigation}) => {
  const [playingNowList, setPlayingNowList] = useState([]);

  useEffect(() => {
    const buildPlayingNowList = async () => {
      const moviesData = await getNowPlayingMovies();
      const mappedData = mapMovieData(moviesData?.results || []);
      setPlayingNowList(mappedData);
    };
    buildPlayingNowList();
  }, []);

  return (
    <View style={styles.container} testID={'movie-list-content'}>
      <Text style={styles.title}>{constants.STREAM_NOW}</Text>
      <FlatList
        testID={'movie-list'}
        data={playingNowList}
        renderItem={({item}) => (
          <MovieItem navigation={navigation} movie={item} />
        )}
        ItemSeparatorComponent={MovieItemSeparator}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default PlayingNow;
