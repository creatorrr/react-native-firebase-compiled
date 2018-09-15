module.exports = {
  env: {
    development: {
      presets: [
        [
          '@invertase/react-native-syntax',
          {
            flow: 'comment',
          },
        ],
      ],
    },
    publish: {
      presets: [
        [
          '@invertase/react-native-syntax',
          {
            flow: 'strip',
          },
        ],
      ],
    },
    es5: {
      plugins: [['@babel/plugin-proposal-class-properties', { loose: false }]],
      presets: [
        [
          '@invertase/react-native-syntax',
          {
            flow: 'strip',
          },
        ],
        [
          '@babel/preset-env',
          {
            targets: {
              node: '6',
            },
          },
        ],
      ],
    },
  },
};
