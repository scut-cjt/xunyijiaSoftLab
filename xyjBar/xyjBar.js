(function ($) {
 //默认参数
     var defaluts = {
     progress:0,//进度，0-1的小数，default：0
     emptyColor:'#ccc',//进度条空值背景色
     barColor:'#ff9800',//进度条颜色
     roundWidth:20, //进度条粗
     };
         
 $.fn.extend({          
    xyjBar:function(options) {     
    var opts = $.extend({}, defaluts, options); //使用jQuery.extend 覆盖插件默认参数
    var barWidth=$(this).width();
    var barHeight=$(this).height(); 
    
    //进度条粗度
    $('.xyj-progress-content').css({
    	width:barWidth-(opts.roundWidth),
      height:barHeight-(opts.roundWidth),
      lineHeight:barHeight-(opts.roundWidth)+"px"
    });
    
    //set emptyColor
    $('.xyj-progress-group').css({
    	'background':opts.emptyColor
    });
    //set progressColor
    $('.xyj-progress-left,.xyj-progress-right').css({
    	'background':opts.progressColor
    });
    
    //进度算法
    if(opts.progress<=0.5){
    	$('.xyj-progress-right').hide();//小于50%，右侧不显示
      $('.xyj-progress-left').show().css({
      	bottom:barHeight-((opts.progress/0.5)*barHeight)
      })
    }else{
    	$('.xyj-progress-left').show().css({
      	bottom:0
      });
      $('.xyj-progress-right').show().css({
      	top:barHeight-((opts.progress/0.5)-1)*barHeight
      });
    }
    
     //显示进度
      $('.xyj-progress-content').html(Math.floor(opts.progress*100)+"%")
 }  
 });
})(window.jQuery);