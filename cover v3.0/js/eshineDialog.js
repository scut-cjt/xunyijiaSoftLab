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
    var dialog="<div class='all-cover'><article class='cover cover3'><div class='info info3'>"
              +"<p class='info-p1 info2-p1'></p><p class='info-p2'></p><div class='btn-grounp'>"
              +"<div class='left-btn'>好</div></div></div></article></div>"
    
      $this.click(function(){
      $this.parents("body").append(dialog);
        $(".info-p1").html(opts.title);
      	$(".info-p2").html(opts.content);
				console.log(opts.content);
				$(".cover3").fadeIn(300,"swing");
				$(".info3").animate({
					left:"0"
				}, 300,"swing");
				 event.stopPropagation();		//阻止冒泡触发$(document).click()
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



