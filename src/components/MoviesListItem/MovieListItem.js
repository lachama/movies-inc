import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import styles from './MovieListItemStyles';
import Config from 'react-native-config';

const MovieListItem = React.memo(({navigation, movie}) => {
  const onMoviePress = () => {
    navigation.navigate('MovieDetails', {id: movie.id});
  };

  return (
    <Pressable onPress={onMoviePress}>
      <View>
        <Text style={styles.item}>Movie Title: {movie.original_title}</Text>
        <Text style={styles.item}>Avarage Vote: {movie.vote_average}</Text>
        <Text style={styles.item}>Release Date: {movie.release_date}</Text>
        <Text style={styles.item}>Id: {movie.id}</Text>
        <Image
          style={styles.img}
          source={{
            uri: `${Config.IMAGE_BASE_URL}${movie.poster_path}`,
          }}
        />
      </View>
    </Pressable>
  );
});

export default MovieListItem;
