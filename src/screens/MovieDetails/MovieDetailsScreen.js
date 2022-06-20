import React, {useState, useEffect} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './MovieDetailsScreenStyles';
import RatingStarsBar from '../../components/RatingStarsBar/RatingStarsBar';
import Config from 'react-native-config';
import {mapMovieDetails, mapMovieCredits} from '../../utils/utils';
import {getMovieDetails, getMovieCredits} from '../../data/Api';
import {Constants} from '../../utils/constants';

const MovieDetailsScreen = props => {
  const movieId = props.route.params.id;
  const [movieDetails, setMovieDetails] = useState([]);
  const [movieCredits, setMovieCredits] = useState([]);

  useEffect(() => {
    const buildMovieDetails = async () => {
      const movieDetailsData = await getMovieDetails(movieId);
      const mappedMovieDetailsData = mapMovieDetails(movieDetailsData);
      setMovieDetails(mappedMovieDetailsData);
    };
    const buildMovieCredits = async () => {
      const movieCreditsData = await getMovieCredits(movieId);
      const mappedMovieCreditsData = mapMovieCredits(
        movieCreditsData?.cast || [],
      );
      setMovieCredits(mappedMovieCreditsData);
    };
    buildMovieDetails();
    buildMovieCredits();
  }, [movieId]);

  return (
    <View style={styles.detailsContainer}>
      <ScrollView>
        <Text style={styles.title}>{movieDetails.original_title}</Text>
        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={{
              uri: `${Config.IMAGE_BASE_URL}${movieDetails.poster_path}`,
            }}
          />
        </View>
        <Text style={styles.releaseText}>
          {Constants.RELEASED_ON} {movieDetails.release_date}
        </Text>
        <Text style={styles.desc}>{movieDetails.overview}</Text>
        <View>
          <Text style={styles.castTitle}>{Constants.CAST}: </Text>
          {movieCredits.map((cast, idx) => {
            return (
              <View style={styles.castList} key={idx}>
                <Text style={styles.cast}>
                  {idx + 1}. {cast.name} {Constants.AS} {cast.character}
                </Text>
              </View>
            );
          })}
        </View>
        <RatingStarsBar avgVote={movieDetails.vote_average} movieId={movieId} />
      </ScrollView>
    </View>
  );
};

export default MovieDetailsScreen;
