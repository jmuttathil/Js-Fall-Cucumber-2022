const Commands = require('../Commands');
const Dates = require('../../Utils/Dates');

class Homepage {
  commands = new Commands();
  dates = new Dates();

  // 1) LOCATORS
  // HEADER
  darkSkyHomeLink = '//span[contains(text(),"Dark Sky by Apple")]';
  darkSkyAppLink = '#phone-icon';
  darkSkyMapsLink = '//a[contains(text(),"Maps")]';
  darkSkyAPILink = '//a[contains(text(),"Dark Sky API")]';
  darkSkyHelpLink =
    '//a[contains(text(),"Dark Sky API")]/following-sibling::a[contains(text(),"Help")]';

  // LOCATION
  currentLocationButton = '//a[@class="currentLocationButton"]';
  locationField = '//form[@id="searchForm"]//input[@type="text"]';
  searchButton = '//img[@alt="Search Button"]';

  // OPTIONS-UNITS & LANGUAGE
  unitSelectMenu =
    '//div[@id="header"]//div[contains(@class,"selectric-units")]//b'; // UNITS MENU

  unitMenuSelected =
    '//div[contains(@class, "units")]//li[contains(@class, "selected highlighted")]'; // UNIT SELECTED

  degFarMphLocator =
    '//div[contains(@class, "selectric-open")]//li[starts-with(text(), "˚F,") and contains(text(), "mph")]';
  degCelMpsLocator =
    '//div[contains(@class, "selectric-open")]//li[starts-with(text(), "˚C,") and contains(text(), "m/s")]';
  degCelKmphLocator =
    '//div[contains(@class, "selectric-open")]//li[starts-with(text(), "˚C,") and contains(text(), "km/h")]';
  degCelMphLocator =
    '//div[contains(@class, "selectric-open")]//li[starts-with(text(), "˚C,") and contains(text(), "mph")]';

  languageSelectMenu =
    ' //div[@id="header"]//div[contains(@class,"selectric-language")]//b'; // LANGUAGE MENU

  languageMenuSelected =
    '//div[contains(@class, "language")]//li[contains(@class, "selected highlighted")]'; // LANGUAGE SELECTED

  //CURRENT CONDITIONS
  windSpeedValue = '//span[@class="num swip wind__speed__value"]';
  windSpeedUnit =
    '//span[@class="num swip wind__speed__value"]/following-sibling::span[@class="unit swap"]';
  humidityValue = '//span[@class="num swip humidity__value"]';
  dewPtValue = '//span[@class="num dew__point__value"]';
  uvIndexValue = '//span[@class="num uv__index__value"]';
  visibilityValue = '//span[@class="num swip visibility__value"]';
  visibilityUnit =
    '//span[@class="num swip visibility__value"]/following-sibling::span[@class="unit swap"]';
  pressureValue = '//span[@class="num swip pressure__value"]';
  pressureUnit =
    '//span[@class="num swip pressure__value"]/following-sibling::span[@class="unit swap"]';

  //CURRENTLY
  currentlySummary =
    '//span[@class="currently"]//span[@class="desc swap"]//span[@class="summary swap"]';
  feelsLikeTemp = '//span[@class="feels-like-text"]';
  lowTemp = '//span[@class="low-temp-text"]';
  highTemp = '//span[@class="high-temp-text"]';

  //TIMELINE
  timelineHours = '//span[starts-with(@class, "hour")]//span';

  // 2) FUNCTIONS

  async getActTimeline() {
    const actTempElements = await $$(this.timelineHours);
    const actTimeline = [];
    for (const tempElement of actTempElements) {
      actTimeline.push(await tempElement.getText());
    }
    console.log(`\nactTimeline -> ${actTimeline} \n`);
    return actTimeline;
  }

  async getExpTimeline() {
    let expTimeline = ['Now'];
    let currentTime = this.dates.getCurrentHour_ha();
    let currentTimeLong = this.dates.getCurrentTime();
    let newTimeLong = this.dates.addTime(currentTimeLong, 2, 'hours');
    let newTime_ha = this.dates.format_ha(newTimeLong);

    for (let i = 2; i <= 12; i++) {
      expTimeline.push(newTime_ha);
      newTimeLong = this.dates.addTime(newTimeLong, 2, 'hours');
      newTime_ha = this.dates.format_ha(newTimeLong);
    }
    console.log(`expTimeline -> ${expTimeline} \n`);
    return expTimeline;
  }

  async getCurrentUnit() {
    var currentUnitValue = await $(this.feelsLikeTemp).getText();
    feelsLikeTempValue = feelsLikeTempValue.substring(
      0,
      feelsLikeTempValue.length - 1
    ); //remove degree symbol
    feelsLikeTempValue = parseInt(feelsLikeTempValue); //convert string to integer
    return feelsLikeTempValue;
  }

  async getFeelsLikeTemp() {
    var feelsLikeTempValue = await $(this.feelsLikeTemp).getText();
    feelsLikeTempValue = feelsLikeTempValue.substring(
      0,
      feelsLikeTempValue.length - 1
    ); //remove degree symbol
    feelsLikeTempValue = parseInt(feelsLikeTempValue); //convert string to integer
    return feelsLikeTempValue;
  }

  async getLowTemp() {
    var lowTempValue = await $(this.lowTemp).getText();
    lowTempValue = lowTempValue.substring(0, lowTempValue.length - 1); //remove degree symbol
    lowTempValue = parseInt(lowTempValue); //convert string to integer
    return lowTempValue;
  }

  async getHighTemp() {
    var highTempValue = await $(this.highTemp).getText();
    highTempValue = highTempValue.substring(0, highTempValue.length - 1); //remove degree symbol
    highTempValue = parseInt(highTempValue); //convert string to integer
    return highTempValue;
  }
}
module.exports = Homepage;
