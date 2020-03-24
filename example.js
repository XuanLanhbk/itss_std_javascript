#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。
const d = [31, 28, 31, 30, 31, 30,31, 31, 30, 31, 30, 31];

const leafYear = (year, month) => {
    if (month <= 2) year--;
    return parseInt(year/4) + parseInt(year/400) - parseInt(year/100);
  }

const dateCount = (year, month, date) => {
  let days = 365*year + leafYear(year, month) + date;
  for (let i = 0; i < month - 1; i++) {
    days += d[i];
  }
  return days;
}
let y1 = parseInt(process.argv[2]), m1 = parseInt(process.argv[3]), d1 = parseInt(process.argv[4]);
let y2 = parseInt(process.argv[5]), m2 = parseInt(process.argv[6]), d2 = parseInt(process.argv[7]);
  
console.log(Math.abs(dateCount(y1,m1,d1)-dateCount(y2,m2,d2)));
