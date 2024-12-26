const metaSocialLinks = {
  x: {
    domain: "x.com",
    username: "TheJosephJu",
  },
  github: {
    domain: "github.com",
    username: "0xj0s3ph",
  },
};

export const urls = Object.fromEntries(
  Object.entries(metaSocialLinks).map(([key, value]) => {
    return [key, `https://${value.domain}/${value.username}`];
  })
);

