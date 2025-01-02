const metaSocialLinks = {
  x: {
    domain: "x.com",
    username: "heyjosephme",
  },
  github: {
    domain: "github.com",
    username: "heyjosephme",
  },
};

export const urls = Object.fromEntries(
  Object.entries(metaSocialLinks).map(([key, value]) => {
    return [key, `https://${value.domain}/${value.username}`];
  }),
);
