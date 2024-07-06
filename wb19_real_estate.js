$(document).ready(function()
{
   $("a[href*='#listingsLayoutGrid1']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_listingsLayoutGrid1').offset().top }, 600, 'easeOutExpo');
   });
   $("#listingsCardContainer").owlCarousel({autoplayTimeout:5000, autoplayHoverPause: true, autoplaySpeed:5000, slideTransition: 'linear', fluidSpeed: true, smartSpeed: 5000, margin: 40, autoplay: true, nav: false, loop: true, dots: true, responsive: {0: {items: 3},500: {items: 3}}});
   $("#listingsCardContainer").trigger('play.owl.autoplay');
   $("a[href*='#rentLayoutGrid1']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_rentLayoutGrid1').offset().top }, 600, 'easeOutExpo');
   });
   $("a[href*='#servicesLayoutGrid']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_servicesLayoutGrid').offset().top }, 600, 'easeOutExpo');
   });
   $("a[href*='#sectionLayoutGrid']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_sectionLayoutGrid').offset().top }, 600, 'easeOutExpo');
   });
   $("a[href*='#dealsLayoutGrid1']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_dealsLayoutGrid1').offset().top }, 600, 'easeOutExpo');
   });
   $("a[href*='#featuresLayoutGrid']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_featuresLayoutGrid').offset().top }, 600, 'easeOutExpo');
   });
   function skrollrInit()
   {
      skrollr.init({forceHeight: false, mobileCheck: function() { return false; }, smoothScrolling: false});
   }
   skrollrInit();
   $("a[href*='#LayoutGrid1']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGrid1').offset().top }, 600, 'easeOutExpo');
   });
   $("a[href*='#LayoutGrid2']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGrid2').offset().top }, 600, 'easeOutExpo');
   });
   $("#CardContainer1").owlCarousel({autoplayTimeout:5000, autoplayHoverPause: true, autoplaySpeed:5000, slideTransition: 'linear', fluidSpeed: true, smartSpeed: 5000, margin: 40, autoplay: true, nav: false, loop: true, dots: true, responsive: {0: {items: 3},500: {items: 3}}});
   $("#CardContainer1").trigger('play.owl.autoplay');
   $("a[href*='#factsLayoutGrid']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_factsLayoutGrid').offset().top-68 }, 600, 'easeOutQuad');
   });
function countUpfactsJavaScript1()
{
   var $obj = $('#factsJavaScript1');
   var count = $obj.attr('data-count');
   var bottomObj = $obj.offset().top + $obj.outerHeight();
   var bottomWnd = $(window).scrollTop() + $(window).height();
   if (bottomWnd > bottomObj && count != 0)
   {
      $({countUp: $obj.text()}).animate({countUp: count},
      {
         duration: 4000,
         step: function() { $obj.text(Math.floor(this.countUp)); },
         complete: function() { $obj.text(this.countUp); $obj.attr('data-count', 0); }
      });  
   }
}
$(window).scroll( function()
{
   countUpfactsJavaScript1();
});
countUpfactsJavaScript1();
function countUpfactsJavaScript2()
{
   var $obj = $('#factsJavaScript2');
   var count = $obj.attr('data-count');
   var bottomObj = $obj.offset().top + $obj.outerHeight();
   var bottomWnd = $(window).scrollTop() + $(window).height();
   if (bottomWnd > bottomObj && count != 0)
   {
      $({countUp: $obj.text()}).animate({countUp: count},
      {
         duration: 4000,
         step: function() { $obj.text(Math.floor(this.countUp)); },
         complete: function() { $obj.text(this.countUp); $obj.attr('data-count', 0); }
      });  
   }
}
$(window).scroll( function()
{
   countUpfactsJavaScript2();
});
countUpfactsJavaScript2();
function countUpfactsJavaScript3()
{
   var $obj = $('#factsJavaScript3');
   var count = $obj.attr('data-count');
   var bottomObj = $obj.offset().top + $obj.outerHeight();
   var bottomWnd = $(window).scrollTop() + $(window).height();
   if (bottomWnd > bottomObj && count != 0)
   {
      $({countUp: $obj.text()}).animate({countUp: count},
      {
         duration: 4000,
         step: function() { $obj.text(Math.floor(this.countUp)); },
         complete: function() { $obj.text(this.countUp); $obj.attr('data-count', 0); }
      });  
   }
}
$(window).scroll( function()
{
   countUpfactsJavaScript3();
});
countUpfactsJavaScript3();
function countUpfactsJavaScript4()
{
   var $obj = $('#factsJavaScript4');
   var count = $obj.attr('data-count');
   var bottomObj = $obj.offset().top + $obj.outerHeight();
   var bottomWnd = $(window).scrollTop() + $(window).height();
   if (bottomWnd > bottomObj && count != 0)
   {
      $({countUp: $obj.text()}).animate({countUp: count},
      {
         duration: 10000,
         step: function() { $obj.text(Math.floor(this.countUp)); },
         complete: function() { $obj.text(this.countUp); $obj.attr('data-count', 0); }
      });  
   }
}
$(window).scroll( function()
{
   countUpfactsJavaScript4();
});
countUpfactsJavaScript4();
   $("a[href*='#testimonialsLayoutGrid']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_testimonialsLayoutGrid').offset().top }, 600, 'easeOutExpo');
   });
   $("a[href*='#contactLayoutGrid']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_contactLayoutGrid').offset().top }, 600, 'easeOutExpo');
   });
});
