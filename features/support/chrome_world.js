(function() {
  "use strict"
  var Chrome = require('selenium-webdriver/chrome')
  var ChromeDriverPath = require('chromedriver').path
  Chrome.setDefaultService(new Chrome.ServiceBuilder(ChromeDriverPath).build())

  function ChromeWorld() {
    this.chrome = new Chrome.Driver()
  }

  module.exports = function() {
    this.World = ChromeWorld
  }
})()
