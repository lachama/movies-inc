import Config from 'react-native-config';

const getNowPlayingMovies = async () => {
  try {
    const response = await fetch(
      `${Config.THE_MOVIEDB_MOVIES_URL}${Config.API_KEY}`,
    );
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

const getMovieDetails = async movieId => {
  try {
    const response = await fetch(
      `${Config.THE_MOVIEDB_BASE_URL}${movieId}?api_key=${Config.API_KEY}&language=en-US`,
    );
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

const getMovieCredits = async movieId => {
  try {
    const response = await fetch(
      `${Config.THE_MOVIEDB_BASE_URL}${movieId}/credits?api_key=${Config.API_KEY}&language=en-US`,
    );
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

const setMovieRating = async (rateValue, movieId) => {
  try {
    const response = await fetch(
      `${Config.THE_MOVIEDB_BASE_URL}${movieId}/rating?api_key=${Config.API_KEY}`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          value: rateValue,
        }),
      },
    );
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

export {getNowPlayingMovies, getMovieDetails, getMovieCredits, setMovieRating};
