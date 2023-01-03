import PinyinMatch from "pinyin-match";

/** 
 *  pinyinMatch 支持简拼搜索 - 单字段
 *  例：pinyinMatch(data_bk, "name", val)
 * 
 *  @param data Array  最好是原数组的"备份"，这样不影响原数组列表的数据
 *  @param key  String 要搜索对象的匹配字段名（即根据某个字段匹配）
 *  @param val  String 匹配的值
 *  @return Object 匹配到的结果
 *  
 * **/ 
const pinyinMatch = (data, key, val) => {
    if (val) {
        var result = [];
        data.forEach((e) => {
            var m = PinyinMatch.match(e[key], val);
            if (m) {
                result.push(e);
            }
        });
        return result;
    } else {
        return data;
    }
}

/** 
 *  pinyinSearch 获取搜索的数据 - 多字段
 *  例：pinyinSearch(data_bk, ['key1', "key2", "key3"], value)
 * 
 *  @param data Array  最好是原数组的"备份"，这样不影响原数组列表的数据
 *  @param arr  Array  用于搜索列表的字段 ['name', 'fac', 'key', ....]
 *  @param val  String 匹配的值
 *  @return Object 匹配到的结果
 *  
 * */ 
export const pinyinSearch = (data, arr, val) => {
    let result = []
    let i = 0;
    while (result.length == 0 && i < arr.length) {
        result = pinyinMatch(data, arr[i], val);
        i++;
    }
    return result;
}


/** 
 *  timeSearch 时间范围搜索 - 可联合pinyinSearch进行关联搜索
 *  例：timeSearch(data_bk, "lastTime", "2017/12/9 9:18", "2018/12/28 11:58")
 * 
 *  @param data Array  最好是原数组的"备份"，这样不影响原数组列表的数据
 *  @param key  String  用于搜索列表的字段名
 *  @param start  String 开始时间
 *  @param end  String 结束时间
 *  @return Object 匹配到的结果
 * 
 * */ 
export const timeSearch = (data, key, start, end) => {
    let result = []
    let startTime = new Date(start).getTime();
    let endTime = new Date(end).getTime();
    if (startTime > endTime) {
        let tmp = startTime;
        startTime = endTime;
        endTime = tmp;
    }
    
    data.forEach((item) => {
        let time = new Date(item[key]).getTime();
        if (time >= startTime && time <= endTime) {
            result.push(item);
        }
    })
    return result;
}


export default pinyinMatch;