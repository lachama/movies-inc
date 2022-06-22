import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import styles from './MovieItemStyles';
import config from '../../config/config';
import {constants} from '../../utils/constants';

const MovieItem = React.memo(({navigation, movie}) => {
  const onMoviePress = () => {
    navigation.navigate('MovieDetails', {id: movie.id});
  };

  return (
    <Pressable onPress={onMoviePress} testID={'list-item'}>
      <View>
        <Text style={styles.item}>
          {constants.MOVIE_TITLE}: {movie.original_title}
        </Text>
        <Text style={styles.item}>
          {constants.AVARAGE_VOTE}: {movie.vote_average}
        </Text>
        <Text style={styles.item}>
          {constants.RELEASE_DATE}: {movie.release_date}
        </Text>
        <Text style={styles.item}>
          {constants.ID}: {movie.id}
        </Text>
        <Image
          style={styles.img}
          source={{
            uri: `${config.IMAGE_BASE_URL}${movie.poster_path}`,
          }}
        />
      </View>
    </Pressable>
  );
});

export default MovieItem;
