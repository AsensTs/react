'use strict';
/**
类 Cookie
将此类放入用到的js文件中即可使用
1.add(name,value,100); 添加一个cookie
2.get(name);
3.remove(name);
用例:
Cookie.add("sk","ss",3);
alert(cookie.get("sk"));
Cookie.remove("sk");
*/

export default class Cookie {
  add = function (name, value, hours) {
    var life = new Date().getTime();
    life += hours * 3600 * 1000;
    var cookieStr = name + "=" + encodeURIComponent(value) + ";expires=" + new Date(life).toGMTString();
    document.cookie = cookieStr;
  };

  get = function (name) {
    var cookies = document.cookie.split(";");
    if (cookies.length > 0) {
      var cookie = cookies[0].split("=");
      if (cookie[0] === name)
        return decodeURIComponent(cookie[1]);
    }
    return null;
  };

  remove = function (name) {
    var cookieStr = name + "=" + encodeURIComponent('null') + ";expires=" + new Date().toGMTString();
    document.cookie = cookieStr;
  };
}