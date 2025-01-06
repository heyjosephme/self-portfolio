const metaSocialLinks = {
  x: {
    domain: "x.com",
    username: "heyjosephme",
  },
  github: {
    domain: "github.com",
    username: "heyjosephme",
  },
  linkedin: {
    domain: "linkedin.com",
    username: "heyjosephme",
  },
};

export const urls = Object.fromEntries(
  Object.entries(metaSocialLinks).map(([key, value]) => {
    if (key === "linkedin") {
      return [key, `https://${value.domain}/in/${value.username}`];
    }
    return [key, `https://${value.domain}/${value.username}`];
  })
);
