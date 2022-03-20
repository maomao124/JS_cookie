/**
 * Project name(项目名称)：JS_cookie
 * File name(文件名): test1
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/20
 * Time(创建时间)： 12:21
 * Version(版本): 1.0
 * Description(描述)： 无
 */


/**
 * 添加 Cookie
 * @param {[string]} name       [Cookie 的名称]
 * @param {[string]} value      [Cookie 的值]
 * @param {[number]} daysToLive [Cookie 的过期时间]
 */
function setCookie(name, value, daysToLive)
{
    // 对cookie值进行编码以转义其中的分号、逗号和空格
    var cookie = name + "=" + encodeURIComponent(value);

    if (typeof daysToLive === "number")
    {
        /* 设置 max-age 属性 */
        cookie += "; max-age=" + (daysToLive * 24 * 60 * 60);
    }
    document.cookie = cookie;
    console.log(cookie);
}


var names = ["n1", "n2", "n3"];
var values = ["v1", "v2", "v3"];
var d = [5000, 5000, 5000];

setCookie(names,values,d);

setCookie("hello","world",500);