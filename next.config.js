const withImages = require("next-images");
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
  },
};
module.exports = withImages({
  fileExtensions: ["jpg", "jpeg", "png", "gif"],
  webpack(config, options) {
    return config;
  },
});
