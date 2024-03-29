const moment = require('moment/moment');

/**
 * To format date(or timestamp) in user defined format
 *
 * Dates -> D -- DD
 * Month -> M -- MM --- MMM ---- MMMM
 * Year -> YY -- YYYY
 *
 * Hour -> h -- hh -- H -- HH (h: 12-hour format ; H: 24-hour format)
 * Minute -> m -- mm
 * Second -> s -- ss
 * Timezone -> Z -- ZZ
 * am/pm -> a -- A (a: am/pm ; A: AM/PM)
 * DayName -> ddd -- dddd
 */

class Dates {
  // DEFAULT TIME STRING
  getCurrentTime() {
    const now = moment();
    return now;
  }

  // DATE
  getCurrentDate_D() {
    const now = moment();
    return now.format('D');
  }

  getCurrentDate_DD() {
    const now = moment();
    return now.format('DD');
  }

  // MONTH
  getCurrentMonth_M() {
    const now = moment();
    return now.format('M');
  }

  getCurrentMonth_MM() {
    const now = moment();
    return now.format('MM');
  }

  getCurrentMonth_MMM() {
    const now = moment();
    return now.format('MMM');
  }

  getCurrentMonth_MMMM() {
    const now = moment();
    return now.format('MMMM');
  }

  // YEAR

  getCurrentYear_YY() {
    const now = moment();
    return now.format('YY');
  }

  getCurrentYear_YYYY() {
    const now = moment();
    return now.format('YYYY');
  }

  // HOUR // (h: 12-hour format ; H: 24-hour format)

  getCurrentHour_h() {
    const now = moment();
    return now.format('h');
  }

  getCurrentHour_ha() {
    const now = moment();
    return now.format('ha');
  }

  getCurrentHour_hh() {
    const now = moment();
    return now.format('hh');
  }

  getCurrentHour_H() {
    const now = moment();
    return now.format('H');
  }

  getCurrentHour_HH() {
    const now = moment();
    return now.format('HH');
  }

  // MINUTE

  getCurrentMinute_m() {
    const now = moment();
    return now.format('m');
  }

  getCurrentMinute_mm() {
    const now = moment();
    return now.format('mm');
  }

  // SECONDS

  getCurrentSeconds_s() {
    const now = moment();
    return now.format('s');
  }

  getCurrentSeconds_ss() {
    const now = moment();
    return now.format('ss');
  }

  // Timezone

  getCurrentTimezone_Z() {
    const now = moment();
    return now.format('Z');
  }

  getCurrentTimezone_ZZ() {
    const now = moment();
    return now.format('ZZ');
  }

  // am/PM

  getCurrentDaytime_a() {
    const now = moment();
    return now.format('a');
  }

  getCurrentDaytime_A() {
    const now = moment();
    return now.format('A');
  }

  // DayName

  getCurrentDayName_ddd() {
    const now = moment();
    return now.format('ddd');
  }

  getCurrentDayName_dddd() {
    const now = moment();
    return now.format('dddd');
  }

  // FORMAT
  format_ha(time) {
    time = moment(time);
    return time.format('ha');
  }

  format_MMMM_D_YYYY(time) {
    time = moment(time);
    return time.format('MMMM D YYYY');
  }

  format_MMMM_YYYY(time) {
    time = moment(time);
    return time.format('MMMM YYYY');
  }

  format_MM$DD$YY(time) {
    time = moment(time);
    return time.format('MM/DD/YY');
  }

  format_DD_MMMMc_YYYY(time) {
    time = moment(time);
    return time.format('DD MMMM, YYYY');
  }

  // TIME CALCULATION
  addTime(startTime, interval, unit) {
    const newTime = moment(startTime).add(interval, unit);
    return newTime;
  }

  calculateMonthsDiff(startTime, endTime) {
    const startMonth = moment(startTime, 'MMMM YYYY');
    const endMonth = moment(endTime, 'MMMM YYYY');

    const monthsDiff = startMonth.diff(endMonth, 'months', true);
    return monthsDiff;
  }
}

module.exports = Dates;
