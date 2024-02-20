"use strict";

function getFullYear() {
  return new Date().getFullYear();
}

function getFooterCopy(isIndex) {
  return isIndex ? "Holberton School" : "Holberton School main dashboard";
}

function getLatestNotification() {
  return "<strong>Urgent requirement</strong> - complete by EOD";
}

module.exports = {
  getFullYear: getFullYear,
  getFooterCopy: getFooterCopy,
  getLatestNotification: getLatestNotification
};