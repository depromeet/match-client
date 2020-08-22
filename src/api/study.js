const { match } = require("./match");

export const getStudy = async ({
  latitude,
  longitude,
  offset = 0,
  limit = 20,
}) => {
  const { data, error } = await match.get("/studies", {
    params: {
      latitude,
      longitude,
      offset,
      limit,
    },
  });

  if (error) {
    return console.error(error);
  }

  return data;
};
