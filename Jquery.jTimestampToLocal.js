/**
 * jTimestampToLocal
 * @description 时间戳转换本地时间程序
 * @date    2013.1.5
 * @version 1.0
 * @author Khiyuan.Fan <Fan.Khiyuan@gmail.com>
 * @license http://creativecommons.org/licenses/by-sa/3.0/cn/ 本作品采用知识共享 署名-相同方式共享 3.0 中国大陆 许可协议进行许可
 *
 *----------------------------------------------------------------------------
 * jTimestampToLocal
 * @param   json
 *          {
 *            pos   : '',   时间戳保存位置，’inner‘为标签内，其它则为标签的对应属性
 *            format: ''    格式化输出，默认‘%Y/%m/%d %H:%M:%S'
 *          }
 * @return  string
 *----------------------------------------------------------------------------
 * @todo    添加格式化输出的内容
 **/
(function($) {
  $.fn.jTimestampToLocal=function(options){
    var opts = $.extend({}, $.fn.jTimestampToLocal.defaults, options);
    return this.each(function() {
      $this = $(this);
      var pos = opts.pos;
      switch(pos)
      {
        case 'inner':
          var timestamp = $this.html();
        break
        default :
          var timestamp = $(this).attr(pos);
        break
      }
      var str_date  = $.fn.jTimestampToLocal.GetLocal(timestamp);
      $this.html('<time>'+str_date+'<time>');
    });
  }
  $.fn.jTimestampToLocal.defaults={
    pos    : 'inner',
    format : '%Y/%m/%d %H:%M:%S'
  };
  $.fn.jTimestampToLocal.GetLocal=function(timestamp){
      alert(opts.format);
      var date1      = new Date(parseInt(timestamp)*1000);
      var str_year   = date1.getFullYear();
      var str_Month  = (date1.getMonth()+1).toString();
      var str_Day    = date1.getDate();
      var str_Hour   = date1.getHours();
      var str_Minute = date1.getMinutes();
      var str_second = date1.getSeconds();
      var str_date = date1.getFullYear()+"/"+(date1.getMonth()+1)+"/"+date1.getDate()+" "+date1.getHours()+":"+date1.getMinutes()+":"+date1.getSeconds();
      return(str_date);
    }
})(jQuery);