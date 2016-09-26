(function() {
  "use strict"

  const WebDriver = require('selenium-webdriver')

  module.exports = function () {
    this.Given(/^anyone is on the Cucumber.js GitHub repository$/, function() {
      return this.chrome.get(
        'https://github.com/cucumber/cucumber-js/tree/master')
    });

    this.Given(/^anyone opens the index page$/, function() {
      return this.chrome.get('localhost:8080')
    })

    this.When(/^they click on "([^"]*)"$/, function(text) {
      return this.chrome.findElement({linkText: text}).then(function(element) {
        return element.click()
      })
    })

    this.Then(/^they will see "([^"]*)"$/, function(text) {
      var xpath = "//*[contains(text(),'" + text + "')]";
      return this.chrome.wait(
        WebDriver.until.elementLocated({xpath: xpath}), 5000)
    })
  }
})()
