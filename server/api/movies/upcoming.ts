export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const { accessToken } = config;
  const { upcomingMoviesURL } = config.public;

  const upcomingMovies = await $fetch(upcomingMoviesURL, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return { upcomingMovies };
});
