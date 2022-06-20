const mapMovieData = data => {
  if (!data) {
    return [];
  }
  return data
    .map(movie => {
      return {
        id: movie.id,
        original_title: movie.original_title,
        release_date: movie.release_date,
        vote_average: movie.vote_average,
        poster_path: movie.poster_path,
      };
    })
    .sort((a, b) => {
      let la = a.original_title.toLowerCase(),
        lb = b.original_title.toLowerCase();

      if (la < lb) {
        return -1;
      }
      if (la > lb) {
        return 1;
      }
      return 0;
    });
};

const mapMovieDetails = data => {
  if (!data) {
    return [];
  }
  const mappedData = {
    genres: data?.genres?.map(gender => gender.name),
    original_title: data?.original_title,
    overview: data?.overview,
    poster_path: data?.poster_path,
    release_date: data?.release_date,
    vote_average: data?.vote_average,
  };
  return mappedData;
};

const mapMovieCredits = data => {
  if (!data) {
    return [];
  }
  const mappedData = data.map(cast => ({
    name: cast.name,
    character: cast.character,
  }));
  return mappedData;
};

export {mapMovieData, mapMovieDetails, mapMovieCredits};
