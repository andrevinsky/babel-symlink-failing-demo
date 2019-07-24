console.log('main-package/registerBabel.js');
require("@babel/register")({
  ignore: [ /node_modules\/(?!secondary\-package)/ ]
});
