import config from '../config/config';
global.fetch = require('node-fetch');

const getNowPlayingMovies = async () => {
  try {
    const response = await fetch(
      `${config.THE_MOVIEDB_MOVIES_URL}${config.API_KEY}`,
    );
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

const getMovieDetails = async movieId => {
  try {
    const response = await fetch(
      `${config.THE_MOVIEDB_BASE_URL}${movieId}?api_key=${config.API_KEY}&language=en-US`,
    );
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

const getMovieCredits = async movieId => {
  try {
    const response = await fetch(
      `${config.THE_MOVIEDB_BASE_URL}${movieId}/credits?api_key=${config.API_KEY}&language=en-US`,
    );
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

const setMovieRating = async (rateValue, movieId) => {
  try {
    const response = await fetch(
      `${config.THE_MOVIEDB_BASE_URL}${movieId}/rating?api_key=${config.API_KEY}`,
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
