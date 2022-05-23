const settings = {
  name: "agne-portfolio-node",
  state: {
    frontity: {
      url: "https://aivars-dev.com/agne-portfolio-admin/",
      title: "Agne Siupsinskaite - Portfolio",
      description: "Agne Siupsinskaite - Portfolio",
    },
  },
  packages: [
    {
      name: "agne-portfolio",
      state: {
        theme: {
          autoPrefetch: "hover",
          menu: [
            ["Works", "/"],
            ["Info", "/info"],
          ],
          featured: {
            showOnList: true,
            showOnPost: true,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "https://aivars-dev.com/agne-portfolio-admin/wp-json",
          homepage: "works",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
