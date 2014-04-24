
winTop = 0;
winHeight = 0;
mHeight = 0;


(function($){
   $.fn.moveBg = function() {
    $(this).each(function(index) {
      var height = $(this).height();
      var top = winTop - $(this).offset().top;
      var num1 = winHeight - top;
      var num2 = top + height;
      var ratio = 1-Math.max(Math.min(num1 / (num1 + num2),1),0);
      $(this).css({"background-position-y":(ratio*100)+"%"});
    });
   };
}(jQuery));


scrollFun = function() {
    winTop = $(window).scrollTop();
    winHeight = $(window).height();
    mHeight = 0; 
    $(".image-parallax > div").moveBg();

    if (winTop <=0) {
      $("#hamburger").addClass("top");
    } else {
      $("#hamburger").removeClass("top");
    }
} 

$(document).ready(function() {
  scrollFun();
  $(window).bind("scroll resize",function() {
    scrollFun();
  });
});

var navHover;
$(".nav-wrapper").hover(
  function() {
    navHover = setTimeout(function() {
      $(".nav-wrapper").addClass("active");
    },500)
  },
  function() {
    clearTimeout(navHover);
    $(this).removeClass("active");
  }
);

$("#hamburger a:first").click(function() {
  $(".nav-wrapper").toggleClass("active");
  return false;
});

$("a.close").click(function() {
  $(this).closest(".active").removeClass("active");
  return false;
});

$(".section-controls a.next").click(function() {
  var $t = $(this);
  $t.parent().siblings(".section-list").css("transform","translate3d(-650px,0,0)");
  return false;
});
$(".section-controls a.prev").click(function() {
  var $t = $(this);
  $t.parent().siblings(".section-list").css("transform","translate3d(0,0,0)");
  return false;
});

$(".box").click(function() {
  $(this).toggleClass("active");
});


$(".newsletter-form").find("input").focus(function() {
  console.log("test");
  $(this).parent().parent().addClass("active");
});

updateScroll = function() {
  $(".image-parallax");
}