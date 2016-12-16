 (function ($) {
 //默认参数
     var defaluts = {
     title:'消息',
     content:'早上好',
     theme: 'green',
     dropClose: false
     };
         
 $.fn.extend({          
    eshineDialog:function(options) {     
    var opts = $.extend({}, defaluts, options); //使用jQuery.extend 覆盖插件默认参数
    var $this=$(this);
    
      $this.click(function(){
        $(".info-p1").html(opts.title);
        $(".info-p2").html(opts.content);
        console.log(opts.content);
        $(".cover3").fadeIn(300,"swing");
        $(".info3").animate({
          left:"0"
        }, 300,"swing");
         event.stopPropagation();   //阻止冒泡触发$(document).click()
      })
      $(".info3").click(function(){return false}) //屏蔽弹窗自身点击关闭
      
      $(".left-btn,.right-btn").click(function(){
        console.log("关闭");
        $(".cover3").fadeOut(300,"swing");
        $(".info3").animate({
          left:"-120%"
        }, 300,"swing");
      })
      if(opts.dropClose==1){
        $(document).click(function(){
          console.log("关闭");
          $(".cover3").fadeOut(300,"swing");
          $(".info3").animate({
            left:"-120%"
          }, 300,"swing");
        })
      } 
            
     }       
});    
})(window.jQuery);









