### jTimestampToLocal ###

将指定位置的时间戳转换本地时间并替换到标签内
***
##### 关于：
 * version : 1.0.1
 * author  : Khiyuan.Fan <Fan.Khiyuan@gmail.com>
 * license : http://creativecommons.org/licenses/by-sa/3.0/cn/ 本作品采用知识共享 署名-相同方式共享 3.0 许可协议进行许可 

***
##### 版本：
 * since   : 1.0.1   添加部分简单的格式化输出内容，暂时有 %Y %m %d %H %M %S
 * since   : 1.0

***
##### 用法：
> $('selector').jTimestampToLocal(param)  
>
> param   : json
>> {  
>>  pos   : '',   时间戳保存位置，'inner'为标签内，其它则为标签的对应属性  
>>  format: ''    格式化输出，默认 '%Y/%m/%d %H:%M:%S'  
>> }