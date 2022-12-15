const moment = require('moment/moment');

class Dates {
  static getCurrentDate() {
    const now = moment();
    return now.format('D');
  }

  static getCurrentMonthNameInShort() {
    const now = moment();
    return now.format('MMM');
  }

  static getCurrentYearInYYYY() {
    const now = moment();
    return now.format('YYYY');
  }

  getCurrentTime() {
    const now = moment();
    return now;
  }

  format_ha(time) {
    return time.format('ha');
  }
  getCurrentHour_ha() {
    const now = moment();
    return now.format('ha');
  }
 
  addTime(startTime, interval, unit) {
    const newTime = moment(startTime).add(interval, unit);
    return newTime;
  }
}
module.exports = Dates;
