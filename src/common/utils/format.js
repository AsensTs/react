'use strict';
exports.__esModule = true;
var padStart = require('lodash/padStart');
var toLower = require('lodash/toLower');
var escape = require('lodash/escape');

var DateFormat = {
  /**
   * Convert milliseconds (long) to Date object.
   */
  fromLong: function fromLong(milliseconds) {
    return new Date(milliseconds);
  },

  format: function format(date, pattern) {
    var str = pattern || 'yyyy-MM-dd HH:mm:ss';

    // Format year.
    str = DateFormat._replacePattern(str, date.getFullYear() + '', /y+/g);

    // Format month.
    str = DateFormat._replacePattern(str, date.getMonth() + 1 + '', /M+/g);

    // Format day.
    str = DateFormat._replacePattern(str, date.getDate() + '', /d+/g);

    // Format hour.
    str = DateFormat._replacePattern(str, date.getHours() + '', /H+/g);

    // Format minute.
    str = DateFormat._replacePattern(str, date.getMinutes() + '', /m+/g);

    // Format seconds.
    str = DateFormat._replacePattern(str, date.getSeconds() + '', /s+/g);

    // Format milliseconds.
    str = DateFormat._replacePattern(str, date.getMilliseconds() + '', /S+/g);

    return str;
  },

  _replacePattern: function _replacePattern(resultStr, valueStr, regex) {
    var matches = resultStr.match(regex);
    if (!matches) return resultStr;

    var match, replace;
    for (var i = 0, len = matches.length; i < len; i++) {
      match = matches[i];
      if (match.length <= valueStr.length) {
        replace = valueStr.substr(valueStr.length - match.length);
      } else {
        replace = padStart(valueStr, match.length, '0');
      }

      resultStr = resultStr.replace(match, replace);
    }

    return resultStr;
  }
};

var TextFormat = {

  /**
   * 将文本框中所编辑的文本，转换为html节点的innerText（所见即所得）：
   *  html标签，&，<，>都将做转义，以便以文本显示出标签和符号，避免被解析；
   *  换行符\r\n或\n将被转换为<br/>，以便正确显示换行。
   *
   * @param text
   * @returns {string}
   */
  formatText: function formatText(text) {
    return text != null ? escape(text + '').replace(/\r\n/g, '<br/>').replace(/\n/g, '<br/>') : '';
  },

  /**
   * 将文本框中所编辑的html源码，转换为html节点的innerHTML：
   *  <script>节点将被转义，以避免xss攻击；
   *  所有html标签，都会过滤带事件handler的节点，以避免xss攻击；
   *  换行符\r\n或\n将被转换为<br/>，以便正确显示换行；
   *  Tab符将被转换为四个&nbsp;，以便正确显示Tab；
   *  空格将被转换为&nbsp;，以便正确显示空格；
   *  目前暂未考虑对html标签做whitelist机制，后续基于安全原因，可进一步做考虑。
   *
   * @param text
   * @returns {string}
   */
  formatHTML: function formatHTML(text) {
    return text != null ? (text + '').replace(/<script[^>]*>/ig, '<script>').replace(/<script[^>]*\/>/ig, '').replace(/<\w*\s.*\son\w*=.*>/ig, '').replace(/\r\n/g, '<br/>').replace(/\n/g, '<br/>').replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;').replace(/\s/g, '&nbsp;') : '';
  }
};

var BooleanFormat = {
  parse: function parse(text) {
    if (!text || toLower(text) === 'false') {
      return false;
    } else {
      return true;
    }
  }
};

exports.DateFormat = DateFormat;
exports.TextFormat = TextFormat;
exports.BooleanFormat = BooleanFormat;