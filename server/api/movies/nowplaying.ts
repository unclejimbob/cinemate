export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const { accessToken } = config;
  const { nowPlayingURL } = config.public;

  const nowPlayingMovies = await $fetch(nowPlayingURL, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return { nowPlayingMovies };
});
