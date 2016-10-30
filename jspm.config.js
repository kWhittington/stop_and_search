SystemJS.config({
  paths: {
    "github:": "jspm_packages/github/",
    "npm:": "jspm_packages/npm/",
    "stop_and_search/": "out/"
  },
  browserConfig: {
    "baseURL": "."
  },
  devConfig: {
    "map": {
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.16"
    },
    "packages": {
      "npm:babel-runtime@5.8.38": {
        "map": {}
      }
    }
  },
  transpiler: "plugin-babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  map: {
    "babel": "npm:babel-core@5.8.38"
  },
  packages: {
    "stop_and_search": {
      "main": "stop_and_search.js"
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "core-js": "npm:core-js@2.4.1",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "jquery": "npm:jquery@3.1.1",
    "knockout": "npm:knockout@3.4.0",
    "moment": "npm:moment@2.15.0",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "semantic-ui": "github:Semantic-Org/Semantic-UI@2.2.4",
    "semantic-ui-css": "npm:semantic-ui-css@2.2.4",
    "semantic-ui-dropdown": "npm:semantic-ui-dropdown@2.2.3",
    "semantic-ui-transition": "npm:semantic-ui-transition@2.2.3",
    "uri": "github:medialize/URI.js@1.18.1"
  },
  packages: {
    "github:Semantic-Org/Semantic-UI@2.2.4": {
      "map": {
        "css": "github:systemjs/plugin-css@0.1.31",
        "jquery": "npm:jquery@2.2.4"
      }
    },
    "npm:knockout@3.4.0": {
      "map": {}
    },
    "npm:semantic-ui-css@2.2.4": {
      "map": {
        "jquery": "npm:jquery@3.1.1"
      }
    }
  }
});