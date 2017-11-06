export default {
  presets: [
    [
      "env",
      {
        targets: {
          browsers: ["last 2 versions", "safari >= 7"],
        },
        modules: false,
        loose: true,
      },
    ],
    "react",
    "stage-2",
  ],
  plugins: ["universal-import"],
  env: {
    development: {
      plugins: ["react-hot-loader/babel"],
    },
  },
}