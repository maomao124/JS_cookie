/**
 * Project name(项目名称)：JS_cookie
 * File name(文件名): test2
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/20
 * Time(创建时间)： 12:31
 * Version(版本): 1.0
 * Description(描述)： 无
 */

document.cookie = "title=cookie";

/**
 *
 * @param {string} name
 * @returns {string|null}
 */
function getCookie(name)
{
    //拆分cookie字符串
    var cookieArr = document.cookie.split(";");

    // 循环遍历数组元素
    for (var i = 0; i < cookieArr.length; i++)
    {
        var cookiePair = cookieArr[i].split("=");

        /* 删除 cookie 名称开头的空白并将其与给定字符串进行比较 */
        if (name === cookiePair[0].trim())
        {
            // 解码cookie值并返回
            return decodeURIComponent(cookiePair[1]);
        }
    }
    // 如果未找到，则返回null
    return null;
}

document.write("url = " + getCookie("url") + "<br>");
document.write("course = " + getCookie("course") + "<br>");
document.write("title = " + getCookie("title"));
document.write("<br>");
document.write("names="+getCookie("names")+"<br>");