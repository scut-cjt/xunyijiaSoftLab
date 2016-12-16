 (function ($) {
 //默认参数
     var defaluts = {
     content:'消息',
     time:1000,
     speed:500,
     };
         
 $.fn.extend({          
    eshineToast:function(options) {     
    var opts = $.extend({}, defaluts, options); //使用jQuery.extend 覆盖插件默认参数
    var $this=$(this);
    var toastGroup="<div class='toast-group'></div>";
    
    $this.after(toastGroup);
    $this.click(function(){
      var toast="<div class='toast-content'></div>"
      if($(".toast-group div").length==0){
        $(".toast-group").append(toast);
      }
      $(".toast-content").html(opts.content);//给toast-content赋值
      $(".toast-content").animate({
        'top':0
      },opts.speed,"swing"); 
      cleanToast(opts.time,$(".toast-content"));
    });
    
    function cleanToast(time,$obj){
      var t_dropDown=setTimeout(function(){
        $obj.animate({
          'top':200,
        },opts.speed,"swing"); 
      },time);
      var t_remove=setTimeout(function(){
        $obj.remove();
      },time+opts.speed)
    }
 }  
 });
})(window.jQuery);
