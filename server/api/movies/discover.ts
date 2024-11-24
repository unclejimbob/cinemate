// TODO: Can we chain the calls to fetch data for movies and TV series together via Promise.all?
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const { accessToken } = config;
  const { movieURL, seriesURL } = config.public;

  // Get movies
  // Ref: https://developer.themoviedb.org/reference/discover-movie
  const movies = await $fetch(movieURL, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    // All these are the default values anyway - see the above 'discover-movie' reference
    query: {
      include_adult: false,
      include_video: false,
      language: "en-US",
      page: "1",
      sort_by: "popularity.desc",
    },
  });

  // Get series
  // Ref: https://developer.themoviedb.org/reference/discover-tv
  const series = await $fetch(seriesURL, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    // All these are the default values anyway - see the above 'discover-tv' reference
    query: {
      include_adult: false,
      include_null_first_air_dates: false,
      language: "en-US",
      page: "1",
      sort_by: "popularity.desc",
    },
  });
  return { movies, series };
});
