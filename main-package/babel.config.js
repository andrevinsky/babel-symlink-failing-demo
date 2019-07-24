console.log('babel.config.js');

module.exports = {
  presets: ["@babel/preset-env"],
  overrides: [{
    test: ["./src", "./test", "./node_modules/secondary-package", "../secondary-package"],
    presets: [
        "@babel/preset-env"
    //   ['@babel/preset-env', { 
    //     targets: { "chrome": "60" } },
    //   }],
    ]
  }]
};
