
let getDate = () => {
  let date = new Date();
  let Y = date.getFullYear();
  let M = date.getMonth() + 1;
  let D = date.getDate();
  let W = formatWeekDay(date.getDay());
  let days = 30;

  // 处理有31天的月份
  days = getMonthDays(Y, M);   

  return {
    Y,M,D,W,days
  }
}

let getWeekDay = function(y, m, d, w) {
  let year = y;
  let month = m;
  let day = d;
  let weekDay = w;
  let days;
  if (!arguments.length) {
    year = getDate().Y;
    month = getDate().M;
    day = getDate().D;
    weekDay = getDate().W;
  }
  days = getMonthDays(year, month);
  day = 13;
  weekDay = 1;
  let remainder = (day - 1) % 7; // 不算当天
  if (!remainder) {
    console.log(weekDay);
  } else {
    
  };  
  console.log(remainder);
  
  console.log(year, month, day, weekDay, days);
}


/**
 * 获取星期
 * @param {*} w 
 * @param {*} type 设置返回类型数字&字符
 * @returns 
 */
let formatWeekDay = (w, type) => {
  let week;
  if (type === 'string' && type !== undefined) {
    switch(w) {
      case 0: week = '日'; break;
      case 1: week = '一'; break;
      case 2: week = '二'; break;
      case 3: week = '三'; break;
      case 4: week = '四'; break;
      case 5: week = '五'; break;
      case 6: week = '六'; break;
      default: break;
    }
  } else {
    if (w === 0) {
      week = 7;
    } else {
      week = w;
    }
  }
  return week;
}

/**
 * 获取传入月份的天数
*/
let getMonthDays = (Y, M) => {
  let days = 30;
  if ([1, 3, 5, 7, 8, 10, 12].indexOf(parseInt(M)) !== -1) {
      days = 31;
  }

  // 判断闰年, 处理二月的天数
  if (leapYear(Y) && M === "2") {
    days = 29;
  } else if (M === "2") {
      days = 28;
  }

  return days;
}

/**
 * 判断闰年
 * @param {any} Y
 * @returns
 */
 let leapYear = Y => {
  if ((Y % 4 === 0 && Y % 100 !== 0) || Y % 400 === 0) {
      return 1;
  }
  return 0;
}


const date = {
  getDate,
  formatWeekDay,
  getWeekDay
}

export default date;