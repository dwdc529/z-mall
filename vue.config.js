module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        common: "@/common",
        component: "@/component",
        network: "@/network",
      },
    },
  },
};
