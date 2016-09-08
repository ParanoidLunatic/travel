$(".all .nav ul li").mouseenter(function(){
	$(this).find(".activity").show();
}).mouseleave(function(){
	$(this).find(".activity").hide();
})
$(document).ready(function() { 
  var length, 
   currentIndex = 0, 
   interval, 
   hasStarted = false, //是否已经开始轮播 
   t = 3000; //轮播时间间隔 
  length = $('.slider-panel').length; 
  //将除了第一张图片隐藏 
  $('.slider-panel:not(:first)').hide(); 
  //将第一个slider-item设为激活状态 
  $('.slider-item:first').addClass('slider-item-selected'); 
  $('.slider-item').hover(function(e) { 
   stop(); 
   var preIndex = $(".slider-item").filter(".slider-item-selected").index(); 
   currentIndex = $(this).index(); 
   play(preIndex, currentIndex); 
  }, function() { 
   start(); 
  }); 
  /** 
   * 向前翻页 
   */
  function pre() { 
   var preIndex = currentIndex; 
   currentIndex = (--currentIndex + length) % length; 
   play(preIndex, currentIndex); 
  } 
  /** 
   * 向后翻页 
   */
  function next() { 
   var preIndex = currentIndex; 
   currentIndex = ++currentIndex % length; 
   play(preIndex, currentIndex); 
  } 
  /** 
   * 从preIndex页翻到currentIndex页 
   * preIndex 整数，翻页的起始页 
   * currentIndex 整数，翻到的那页 
   */
  function play(preIndex, currentIndex) { 
   $('.slider-panel').eq(preIndex).fadeOut(500) 
    .parent().children().eq(currentIndex).fadeIn(1000); 
   $('.slider-item').removeClass('slider-item-selected'); 
   $('.slider-item').eq(currentIndex).addClass('slider-item-selected'); 
  } 
  /** 
   * 开始轮播 
   */
  function start() { 
   if(!hasStarted) { 
    hasStarted = true; 
    interval = setInterval(next, t); 
   } 
  } 
  /** 
   * 停止轮播 
   */
  function stop() { 
   clearInterval(interval); 
   hasStarted = false; 
  } 
  //开始轮播 
  start(); 
  
  $(function aa(){
  	var ll = document.getElementsByClassName("ll");
  	var k=-42;
  	for(var i=1;i<ll.length;i++){
  		ll[i].children[0].style.backgroundPosition = "0" + k + "px";
  		k = (-42)*(i+1);
  	}

  })
 });

function aaa(){
  var $ll = $(".ll"),
       l=-42,
       k=-44,
       len = $ll.length,
       index = $(this).index();
  for (var i = 0; i < len; i++) {
    $ll.eq(i).mouseenter(function(){
      var index = $(this).index();
      $(this).find("span").css("background-position","140px " + l * index + "px")
      $(this).find("#non_"+index).show()
      $(this).find("#non_"+index).css("top",k * index + "px")
    })
    $ll.eq(i).mouseleave(function(){
      var index = $(this).index();
      $(this).find("span").css("background-position","0px " + l * index + "px")
      $(this).find("#non_"+index).hide()
    })
    // $(".main1").mouseleave(function(){
    //   $(this).find(".yin").hide()
    // })
  };
};
aaa();
var non=[
  {index:"0",title:{name_1:"【走遍全球】那个徒步的姑娘",name_2:"【交通常识】新手上路看进来"},style:{name_1:"从体育不及格到纵穿美国，她似支离弦的箭，用脚步燃烧青春！",name_2:"喜欢自驾，新手开车经常会遇到的五种“伪故障”解析！"},image1:{name_1:"http://static02.lvye.com/lvyecms/media/homepagecms/20168/1471314766.88.jpeg",name_2:"http://static03.lvye.com/lvyecms/media/homepagecms/20168/1472097500.16.jpg"},dao:{name_1:"徒步线路",name_2:"徒步知识",name_3:"",name_4:"",name_5:""}},
  {index:"1",title:{name_1:"【自驾茶山】扎营赏景看流星雨",name_2:"【交通常识】新手上路看进来"},style:{name_1:"忙碌的夏天，一起相约茶山，邂逅一场醉美流星雨！",name_2:"喜欢自驾，新手开车经常会遇到的五种“伪故障”解析！"},dao:{name_1:"车友客栈",name_2:"交易维修",name_3:"摩托旅行",name_4:"房车露营",name_5:""}},
  {index:"2",title:{name_1:"【巅峰之梦】41年梦断珠峰",name_2:"【探洞极限】探索西洞盘龙"},style:{name_1:"一个转身41年长路漫漫，珠峰之巅，终究是还是梦！",name_2:"好奇心是种魔怔，然大自然才是魔怔之魂，又一次探洞之旅！"},dao:{name_1:"资讯",name_2:"讨论",name_3:"活动",name_4:"",name_5:""}},
  {index:"3",title:{name_1:"【穿越羌塘】最后的荒原",name_2:"【长途骑行】骑行去拉萨"},style:{name_1:"39天徒步骑行无后援成功穿越羌塘的首位女性！",name_2:"骑再远的路，越过再大的艰险，只为看到布宫的那一眼！"},dao:{name_1:"厂商品牌",name_2:"长途骑行",name_3:"短途拉链",name_4:"骑游作业",name_5:"骑行知识"}},
  {index:"4",title:{name_1:"【滑雪知识】教你怎么玩滑雪",name_2:"【雪具交易】二手交易汇总"},style:{name_1:"想要去滑雪？还不会滑雪，滑雪指南带你入门！ ",name_2:"闲时准备忙时用，7、8俩月雪具二手交易信息合集！"},dao:{name_1:"滑雪活动",name_2:"滑雪杂谈",name_3:"雪场信息",name_4:"装备讨论",name_5:"技术交流"}},
  {index:"5",title:{name_1:"【与你相约】最美盛夏摄影赛",name_2:"【户外摄影】崇礼夏日迷人风景"},style:{name_1:"2016年绿野最美盛夏摄影大赛即将收尾，好作品都砸进来！",name_2:"冬日的滑雪场，夏日的绿草地，同一个地方，不同的风采！"},dao:{name_1:"一图说事",name_2:"专题征集",name_3:"作品赏析",name_4:"技术交流",name_5:"户外赏析"}},
  {index:"6",title:{name_1:"【走遍中国】醉美目的地（上）",name_2:"【走遍中国】醉美目的地（下）"},style:{name_1:"世界辣么大，我想去看看，一起粗发八个最值得一去的地方！",name_2:"世界辣么大，我想去走走，一起粗发八个最值得一去的地方！"},dao:{name_1:"游记",name_2:"攻略",name_3:"千米峰",name_4:"",name_5:""}},
  {index:"7",title:{name_1:"【魔山挑战】终极BOSS竟是TA",name_2:"【越跑越野】多彩跑步日记"},style:{name_1:"9月10日，魔山挑战即将开跑，谁是终极BOSS？",name_2:"最美的多彩跑步日记及轨迹，已累计347天累计5737km。"},dao:{name_1:"跑步知识",name_2:"约跑活动",name_3:"跑步日记",name_4:"",name_5:""}}
];
var trval = [
  {index:"0",title:{name_1:"【星瑀户外】国庆长假穿越彩云之南-梅里雪山-泸沽湖-香格里拉普达措-松赞林寺",name_2:"3300",name_3:"星瑀"},image:"../img/1.1.png"},
  {index:"1",title:{name_1:"【青年户外】丰宁坝上草原骑马9月2-4号 发团免费送烤全羊，酒水-草地摩托",name_2:"260",name_3:"青年户外俱乐部"},image:"../img/1.2.jpg"},
  {index:"2",title:{name_1:"【野蘑菇】十一国庆额济纳胡杨林、青海湖、塔尔寺、茶卡盐湖、张掖丹霞、敦煌莫高窟、",name_2:"2880",name_3:"野蘑菇户外 "},image:"../img/1.3.jpg"},
  {index:"3",title:{name_1:"【青年户外】国庆青海湖·张掖·茶卡盐湖·鸣沙山·月牙泉·莫高窟·额济纳",name_2:"2900",name_3:"青年户外俱乐部"},image:"../img/1.4.jpeg"},
  {index:"4",title:{name_1:"【星瑀户外】9月28号西藏莲花圣地墨脱徒步-最好的时候去最该去的地方",name_2:"4800",name_3:"星瑀"},image:"../img/1.5.jpg"},
  {index:"5",title:{name_1:"【IU部落●中秋】草原【塞罕坝乌兰布统将军泡子公主湖●锡林郭勒达里湖小火山】",name_2:"650",name_3:"红色侦察兵"},image:"../img/1.6.jpg"},
  {index:"6",title:{name_1:"dsfdsf",name_2:"3300",name_3:"星瑀"},image:"../img/1.6.jpg"},
  {index:"7",title:{name_1:"【dsfdsfsd",name_2:"260",name_3:"青年户外俱乐部"},image:"../img/1.2.jpg"},
  {index:"8",title:{name_1:"dsfdsds、敦煌莫高窟、",name_2:"2880",name_3:"野蘑菇户外 "},image:"../img/1.3.jpg"},
  {index:"9",title:{name_1:"【青年户外】国庆青海湖·张掖·茶卡盐湖·鸣沙山·月牙泉·莫高窟·额济纳",name_2:"2900",name_3:"青年户外俱乐部"},image:"../img/1.4.jpeg"},
  {index:"10",title:{name_1:"【星瑀户外】9月28号西藏莲花圣地墨脱徒步-最好的时候去最该去的地方",name_2:"4800",name_3:"星瑀"},image:"../img/1.5.jpg"},
  {index:"11",title:{name_1:"【IU部落●中秋】草原【塞罕坝乌兰布统将军泡子公主湖●锡林郭勒达里湖小火山】",name_2:"650",name_3:"红色侦察兵"},image:"../img/1.6.jpg"},
  {index:"12",title:{name_1:"56345654654",name_2:"3300",name_3:"星瑀"},image:"../img/1.1.png"},
  {index:"13",title:{name_1:"54645654645654",name_2:"260",name_3:"青年户外俱乐部"},image:"../img/1.2.jpg"},
  {index:"14",title:{name_1:"【野蘑菇】十一国庆额济纳胡杨林、青海湖、塔尔寺、茶卡盐湖、张掖丹霞、敦煌莫高窟、",name_2:"2880",name_3:"野蘑菇户外 "},image:"../img/1.3.jpg"},
  {index:"15",title:{name_1:"【青年户外】国庆青海湖·张掖·茶卡盐湖·鸣沙山·月牙泉·莫高窟·额济纳",name_2:"2900",name_3:"青年户外俱乐部"},image:"../img/1.4.jpeg"},
  {index:"16",title:{name_1:"【星瑀户外】9月28号西藏莲花圣地墨脱徒步-最好的时候去最该去的地方",name_2:"4800",name_3:"星瑀"},image:"../img/1.5.jpg"},
  {index:"17",title:{name_1:"【IU部落●中秋】草原【塞罕坝乌兰布统将军泡子公主湖●锡林郭勒达里湖小火山】",name_2:"650",name_3:"红色侦察兵"},image:"../img/1.6.jpg"}
]

function xx(){
  var $main = $(".ll");
  for(var i=0;i<non.length;i++){
    $main.eq(i).append(
      '<div class="yin" id="non_'+i+'">'
        +'<div class="fir">'
          +'<img src="http://static02.lvye.com/lvyecms/media/homepagecms/20168/1471314766.88.jpeg">'
          +'<div>'
            +'<a>'+non[i].title.name_1+'</a>'
            +'<p>'+non[i].style.name_1+'</p>'
          +'</div>'
        +'</div>'
        +'<div class="sec fir">'
          +'<div>'
            +'<a>'+non[i].title.name_2+'</a>'
            +'<p>'+non[i].style.name_2+'</p>'
          +'</div>'
          +'<img src="http://static03.lvye.com/lvyecms/media/homepagecms/20168/1472097500.16.jpg">'
        +'</div>'
        +'<div class="thi">'
          +'<p>快速导航</p>'
          +'<a>全部</a>'
          +'<a>'+non[i].dao.name_1+'</a>'
          +'<a>'+non[i].dao.name_2+'</a>'
          +'<a>'+non[i].dao.name_3+'</a>'
          +'<a>'+non[i].dao.name_4+'</a>'
          +'<a>'+non[i].dao.name_5+'</a>'
        +'</div>'
      +'</div>'
    )
  }
  
}
xx();


function che(){
  var aa = document.getElementsByTagName("a")
  for (var i = 0; i < aa.length; i++) {
    if (aa[i].innerHTML == "") {
      aa[i].style.display="none"
    };
  };
}
che();

window.onload = function(){
  var a = document.getElementsByTagName("div");
  for(var i=0;i<a.length;i++){
    if(a[i].className == "remen"){
      tabw(a[i]);
    }
  }
};
  
function tabw(a){
  var $li = $("#ul1 li"),
      $mzuo = $(".jing .mzuo");
      createDom(0);
  $li.mouseover(function(){
    $(this).addClass("current").siblings().removeClass("current");
    var $diyi = $(".mzuo");
      $diyi.empty();
      createDom($(this).index());
  });
};

function createDom(init){
  var $diyi = $(".mzuo");
  for (var k = 0+init*6; k < 6+init*6;k++) {
        $diyi.append(
          '<div class="xing">'
            +'<a href="#" class="a1">'
              +'<img src='+trval[k].image+'>'
            +'</a>'
            +'<p>'+trval[k].title.name_1+'</p>'
            +'<span>¥</span>'
            +'<span class="span2">'+trval[k].title.name_2+'</span>'
            +'<span>起</span>'
            +'<a class="a2">'+trval[k].title.name_3+'</a>'
          +'</div>'
        )
      };
}
$(".tuicenter>a").mouseenter(function(){
  $(this).css({fontSize:"18px",fontWeight:"1000","color":"black"}).siblings().css({fontSize:"14px",fontWeight:"none","color":"rgb(102,102,102)"})
  $(this).find(".cenbot").show().parent().siblings().find(".cenbot").hide()
})
var cenbo=[
  {index:"0",title:"中国地质大学（北京）科考队于4月25日正式成立。本次社会实践活动将前往泸沽湖进行“旅游开发与民俗变迁——以泸沽湖摩梭族村落为例”的主题调研并完成梅里雪山小转山徒步路线。积累实践经验！",imageurl:"../img/1472442524.12.jpg"},
  {index:"1",title:"中国地质大学（北京）科考队于4月25日正式成立。本次社会实践活动将前往泸沽湖进行“旅游开发与民俗变迁——以泸沽湖摩梭族村落为例”的主题调研并完成梅里雪山小转山徒步路线。积累实践经验！",imageurl:"../img/1472442524.12.jpg"},
  {index:"2",title:"中国地质大学（北京）科考队于4月25日正式成立。本次社会实践活动将前往泸沽湖进行“旅游开发与民俗变迁——以泸沽湖摩梭族村落为例”的主题调研并完成梅里雪山小转山徒步路线。积累实践经验！",imageurl:"../img/1472442524.12.jpg"},
  {index:"3",title:"中国地质大学（北京）科考队于4月25日正式成立。本次社会实践活动将前往泸沽湖进行“旅游开发与民俗变迁——以泸沽湖摩梭族村落为例”的主题调研并完成梅里雪山小转山徒步路线。积累实践经验！",imageurl:"../img/1472442524.12.jpg"},
  {index:"4",title:"中国地质大学（北京）科考队于4月25日正式成立。本次社会实践活动将前往泸沽湖进行“旅游开发与民俗变迁——以泸沽湖摩梭族村落为例”的主题调研并完成梅里雪山小转山徒步路线。积累实践经验！",imageurl:"../img/1472442524.12.jpg"},
  {index:"5",title:"中国地质大学（北京）科考队于4月25日正式成立。本次社会实践活动将前往泸沽湖进行“旅游开发与民俗变迁——以泸沽湖摩梭族村落为例”的主题调研并完成梅里雪山小转山徒步路线。积累实践经验！",imageurl:"../img/1472442524.12.jpg"},
  {index:"6",title:"中国地质大学（北京）科考队于4月25日正式成立。本次社会实践活动将前往泸沽湖进行“旅游开发与民俗变迁——以泸沽湖摩梭族村落为例”的主题调研并完成梅里雪山小转山徒步路线。积累实践经验！",imageurl:"../img/1472442524.12.jpg"},
  {index:"7",title:"中国地质大学（北京）科考队于4月25日正式成立。本次社会实践活动将前往泸沽湖进行“旅游开发与民俗变迁——以泸沽湖摩梭族村落为例”的主题调研并完成梅里雪山小转山徒步路线。积累实践经验！",imageurl:"../img/1472442524.12.jpg"},
  {index:"8",title:"中国地质大学（北京）科考队于4月25日正式成立。本次社会实践活动将前往泸沽湖进行“旅游开发与民俗变迁——以泸沽湖摩梭族村落为例”的主题调研并完成梅里雪山小转山徒步路线。积累实践经验！",imageurl:"../img/1472442524.12.jpg"},
]
function createcenbot(){
  var $a = $(".tuicenter>a");
  for (var i = 1; i < cenbo.length; i++) {
    $a.eq(i).append(
      '<div class="cenbot">'
        +'<img src='+cenbo[i].imageurl+'>'
        +'<div class="botri">'
          +'<p>'+cenbo[i].title+'</p>'
      +'</div>'
    )
  };
}
createcenbot();

$(document).ready(function(){
  $(".ribo li").mouseover(function(){
    $(".ribo li").eq($(this).index()).addClass("yyy").siblings().removeClass('yyy');
    $(".ribo div").hide().eq($(this).index()).show();
  })
})
