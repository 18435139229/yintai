//banner轮播
$(".tab_pannel").fadeOut(0).eq(0).fadeIn(0);
	$(".tab_pannel").fadeOut(0).eq(0).fadeIn(0);
	$(".nav_trriger>li").eq(0).css("border-bottom","8px solid #ae004f");
   var num=0;
  function change(){
	num++;
	if(num>=$(".tab_pannel").length){
		num=0;
	}
    $(".tab_pannel").fadeOut(200).eq(num).fadeIn(500)
    $(".nav_trriger>li").css("border-bottom","8px solid #211616").eq(num).css("border-bottom","8px solid #ae004f");
}
 var t=setInterval(change,2000);

    $(".eva-prev").hide(0);
    $(".eva-next").hide(0);
    $(".ban").hover(function(){
        $(".eva-prev").show(100);
        $(".eva-next").show(100);
    },function(){
        $(".eva-prev").hide(100);
        $(".eva-next").hide(100);
    })
    $(".eva-prev").click(function(){
        $(".eva-prev").stop();
        num--;
        if(num<=-1){
         num=$(".tab_pannel").length-1;
        }
        $(".nav_trriger>li").css("border-bottom","8px solid #211616").eq(num).css("border-bottom","8px solid #ae004f");
        $(".tab_pannel").fadeOut(200).eq(num).fadeIn(500);
       }) 
       $(".eva-next").click(function(){
        $(".eva-next").stop();
           change();
      })

  $(".nav_trriger>li").each(function(index,obj){
     $(obj).mouseover(function(){
         $(".nav_trriger>li").stop();      
         $(".nav_trriger>li").css("border-bottom","8px solid #211616").eq(index).css("border-bottom","8px solid #ae004f");
         $(".tab_pannel").fadeOut(200).eq(index).fadeIn(500);
           num=index;
     });
     
  });




//第一个选项卡
$(".bian").each(function(index,obj){
    $(".bian").eq(0).css("borderBottom","5px solid #e5004f");
    $(".bian>span").eq(0).css("display","block");
    $(".bian>a").eq(0).css("fontWeight","bold");
    $(obj).mouseover(function(){
      $(".bian").css("borderBottom","5px solid #333").eq(index).css("borderBottom","5px solid #e5004f");
      $(".bian>span").css("display","none").eq(index).css("display","block");
      $(".bian>a").css("fontWeight","").eq(index).css("fontWeight","bold");
      $(".pr_list_t").eq(0).css("display","block");
      $(".pr_list_t").css("display","none").eq(index).css("display","block");
  });
});
//第二个选项卡
$(".bh").each(function(index,obj){
    $(".bh").eq(0).css("borderBottom","3px solid #e5004f");
    $(".bh>span").eq(0).css("display","block");
    $(".bh>a").eq(0).css("fontWeight","bold");
    $(obj).mouseover(function(){
      $(".bh").css("borderBottom","3px solid #333").eq(index).css("borderBottom","3px solid #e5004f");
      $(".bh>span").css("display","none").eq(index).css("display","block");
      $(".bh>a").css("fontWeight","").eq(index).css("fontWeight","bold");
      $(".ch").eq(0).css("display","block");
      $(".ch").css("display","none").eq(index).css("display","block");
  });
});

$(".height-limit").css("display","none");
$(".menu-cate-all-out dl").each(function(index,obj){
    $(obj).hover(function(){
      $(".menu-cate-all-out span").eq(index).css("display","none");
      $(".menu-cate-all-out dl").eq(index).css("background-color","#ae004f");
      $(".height-limit").eq(index).css("display","block");
    },function(){
      $(".menu-cate-all-out span").css("display","block");
      $(".menu-cate-all-out dl").css("background-color","");
      $(".height-limit").css("display","none");
    });
});

$(".yt-seller-myhome").hide(0);
$(".J_myhome").hover(function(){
   $(".J_myhome").stop(true,true);
   $(".yt-seller-myhome").stop(true,true);
   $(".yt-seller-myhome").show(200);
   $(".log-yt-home").css("background","white");
   $(".log-yt-home").css("boxShadow","0 0px 2px rgba(0,0,0,0.5)");
},function(){
   $(".J_myhome").stop(true,true);
   $(".yt-seller-myhome").stop(true,true);
   $(".yt-seller-myhome").hide(100);
   $(".log-yt-home").css("background","");
   $(".log-yt-home").css("boxShadow","");
})

$(".wechat").hover(function(){
 $(".yt-seller-wechat").css("display","block");
},function(){
 $(".yt-seller-wechat").css("display","none");
})
$(".yt-phone-link").hover(function(){
 $(".yt-seller-phone").css("display","block");
},function(){
 $(".yt-seller-phone").css("display","none"); 
})

$(".yt-bags").slideUp(0);
$(".minishop").hover(function(){
  $(".yt-bags").slideDown(200);
},function(){
  $(".yt-bags").slideUp(100);
})


$(".border").hover(function(){
  var index=$(this).index();
  $(".border_top").stop(true,true);
  $(".border_left").stop(true,true);
  $(".border_bottom").stop(true,true);
  $(".border_right").stop(true,true);
  $(".border_top").eq(index).animate({width:"220px"},100)
  $(".border_left").eq(index).animate({height:"260px"},100)
  $(".border_bottom").eq(index).animate({width:"220px"},100)
  $(".border_right").eq(index).animate({height:"260px"},100)
},function(){
  var index=$(this).index();
  $(".border_top").stop(true,true);
  $(".border_left").stop(true,true);
  $(".border_bottom").stop(true,true);
  $(".border_right").stop(true,true);
  $(".border_top").eq(index).animate({width:"0"},100)
  $(".border_left").eq(index).animate({height:"0"},100)
  $(".border_bottom").eq(index).animate({width:"0"},100)
  $(".border_right").eq(index).animate({height:"0"},100)
})

$(".yt_pro_detail").hover(function(){
  var index=$(this).index();
  $(".border_top").stop(true,true);
  $(".border_left").stop(true,true);
  $(".border_bottom").stop(true,true);
  $(".border_right").stop(true,true);
  $(".border_top",this).eq(index).animate({width:"220px"},100)
  $(".border_left",this).eq(index).animate({height:"260px"},100)
  $(".border_bottom",this).eq(index).animate({width:"220px"},100)
  $(".border_right",this).eq(index).animate({height:"260px"},100)
},function(){
  var index=$(this).index();
  $(".border_top").stop(true,true);
  $(".border_left").stop(true,true);
  $(".border_bottom").stop(true,true);
  $(".border_right").stop(true,true);
  $(".border_top",this).eq(index).animate({width:"0"},100)
  $(".border_left",this).eq(index).animate({height:"0"},100)
  $(".border_bottom",this).eq(index).animate({width:"0"},100)
  $(".border_right",this).eq(index).animate({height:"0"},100)
})

$(".zz").hover(function(){
  var index=$(this).index();
  $(".border_top").stop(true,true);
  $(".border_left").stop(true,true);
  $(".border_bottom").stop(true,true);
  $(".border_right").stop(true,true);
  $(".border_top",this).animate({width:"200px"},100)
  $(".border_left",this).animate({height:"252px"},100)
  $(".border_bottom",this).animate({width:"200px"},100)
  $(".border_right",this).animate({height:"252px"},100)
},function(){
  var index=$(this).index();
  $(".border_top").stop(true,true);
  $(".border_left").stop(true,true);
  $(".border_bottom").stop(true,true);
  $(".border_right").stop(true,true);
  $(".border_top",this).animate({width:"0"},100)
  $(".border_left",this).animate({height:"0"},100)
  $(".border_bottom",this).animate({width:"0"},100)
  $(".border_right",this).animate({height:"0"},100)
})

$(".opac").hover(function(){
  var index=$(this).index();
  $(".border_top").stop(true,true);
  $(".border_left").stop(true,true);
  $(".border_bottom").stop(true,true);
  $(".border_right").stop(true,true);
  $(".border_top",this).eq(index).animate({width:"270px"},100)
  $(".border_left",this).eq(index).animate({height:"181px"},100)
  $(".border_bottom",this).eq(index).animate({width:"270px"},100)
  $(".border_right",this).eq(index).animate({height:"181px"},100)
},function(){
  var index=$(this).index();
  $(".border_top").stop(true,true);
  $(".border_left").stop(true,true);
  $(".border_bottom").stop(true,true);
  $(".border_right").stop(true,true);
  $(".border_top",this).eq(index).animate({width:"0"},100)
  $(".border_left",this).eq(index).animate({height:"0"},100)
  $(".border_bottom",this).eq(index).animate({width:"0"},100)
  $(".border_right",this).eq(index).animate({height:"0"},100)
})

//中间图片轮播

    $(".left").hide(0);
    $(".right").hide(0);
    $(".floor_banner_slide").hover(function(){
        var index=$(this).index();
        $(".left",this).show(100);
        $(".right",this).show(100);
    },function(){
        var index=$(this).index();
        $(".left",this).hide(100);
        $(".right",this).hide(100);
    }) 


  var shn=0;
  $(".floor_slide").each(function(index){
  $(".floor_slide:eq("+index+") .btn").click(function(){
    var shnn=$(this).index(".floor_slide:eq("+index+") .btn")
    $(".floor_slide:eq("+index+") img").css("display","none").eq(shnn).css("display","block")
    $(".floor_slide:eq("+index+") .btn").css("background","").eq(shnn).css("background","#e5004f")
  })
  })

  $(".floor_slide").each(function(index){
    $(".floor_slide:eq("+index+") .lb").click(function(){
    shn++;
    if(shn>=2){
      shn=0;
    }
    $(".floor_slide:eq("+index+") img").css("display","none").eq(shn).css("display","block")
    $(".floor_slide:eq("+index+") .btn").css("background","").eq(shn).css("background","#e5004f")
  })
  })
//左边品牌小图标轮播
  $(".prev").each(function(index){
    $(".prev:eq("+index+")").click(function(){
      $(".ss:eq("+index+")").stop(true,true);
      $(".ss:eq("+index+")").animate({"left":"-340px"},function(){
      $(".ss:eq("+index+") .cc:eq(1)").after($(".ss:eq("+index+") .cc:eq(0)"));
      $(".ss:eq("+index+")").css({"left":"0"});
      })
    })
  })
  $(".next").each(function(index){
    $(".next:eq("+index+")").click(function(){
      $(".ss:eq("+index+")").stop(true,true);
      $(".ss:eq("+index+")").animate({"left":"0"},function(){
      $(".ss:eq("+index+") .cc:eq(1)").before($(".ss:eq("+index+") .cc:eq(2)"));
      $(".ss:eq("+index+")").css({"left":"-340px"});
      })
    })
  })

//楼层出现效果
$(".float_nav").fadeOut(0);
$(window).scroll(function(){
  var tops=$(window).scrollTop();
  if (tops>=1000) {
    $(".float_nav").fadeIn(500);
  }else{
    $(".float_nav").fadeOut(500);
  };
  $(".yt").each(function(index,obj){
    if ($(obj).position().top<=tops){
      $(".aa").removeClass("chuxian").eq(index).addClass("chuxian")
    };
  })
   // 楼层点击效果
$(".aa").click(function(index){
      var index=$(this).index();
      if(index<=8){
        var fixtop={st:tops}
        $(fixtop).animate({st:$(".yt").eq(index).offset().top-40},{
          speed:2000,
          step:function(){
            $(window).scrollTop(fixtop.st)
          }
        })
      }
      
})

  //返回顶部
    $(".Y_floor_top").click(function(){
    var top={st:tops} 
    $(top).animate({st:1},{
      speed:2000,
      step:function(){
        $(window).scrollTop(top.st)
      }
    })
  })
})



