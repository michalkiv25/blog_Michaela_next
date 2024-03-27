(function($) { "use strict";

jQuery(window).on('load', function () {
  $(".egns-preloader").delay(1600).fadeOut("slow");
});

 // niceSelect
 $('select').niceSelect();

 

// datepicker
jQuery('#datepicker').datepicker({
  format: 'dd-mm-yyyy',
  startDate: '+1d'
});

// autofill input

$( function() {
  var availableTags = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme"
  ];
  $( "#countrySearch" ).autocomplete({
    source: availableTags
  });
} );

$( function() {
  var availableTags = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme"
  ];
  $( "#countrySearch1" ).autocomplete({
    source: availableTags
  });
} );


/****** dateoicker js Initialization ******/


// sticky header

window.addEventListener('scroll',function(){
  const header = document.querySelector('header.style-1, header.style-2, header.style-3,header.style-4,header.style-5');
  header.classList.toggle("sticky",window.scrollY > 0);
});

// mobile-search-area

$('.search-btn').on("click", function(){
  $('.mobile-search').addClass('slide');
});

$('.search-cross-btn').on("click", function(){
  $('.mobile-search').removeClass('slide');
});

// mobile-menu

$('.mobile-menu-btn').on("click",function(){
  $('.main-nav').addClass('show-menu');
});

$('.menu-close-btn').on("click",function(){
  $('.main-nav').removeClass('show-menu');
});


// mobile-drop-down

$(".main-nav .bi").on('click', function (event) {
  var $fl = $(this);
  $(this).parent().siblings().find('.sub-menu').slideUp();
  $(this).parent().siblings().find('.bi').addClass('bi-chevron-down');
  if ($fl.hasClass('bi-chevron-down')) {
      $fl.removeClass('bi-chevron-down').addClass('bi-chevron-up');
  } else {
      $fl.removeClass('bi-chevron-up').addClass('bi-chevron-down');
  }
  $fl.next(".sub-menu").slideToggle();
});

// Menu Toggle button sidebar
var toggleIcon = document.querySelectorAll('.sidebar-btn')
var closeIcon = document.querySelectorAll('.cross-icon')
var searchWrap = document.querySelectorAll('.menu-toggle-btn-full-shape')

toggleIcon.forEach((element)=>{
    element.addEventListener('click', ()=>{
        document.querySelectorAll('.menu-toggle-btn-full-shape').forEach((el)=>{
            el.classList.add('show-sidebar')
        })
    })
})
closeIcon.forEach((element)=>{
    element.addEventListener('click', ()=>{
        document.querySelectorAll('.menu-toggle-btn-full-shape').forEach((el)=>{
            el.classList.remove('show-sidebar')
        })
    })
})

 window.onclick = function(event){
    // Menu Toggle button sidebar
    searchWrap.forEach((el)=>{
      if(event.target === el){
        el.classList.remove('show-sidebar')
      }
    })
}

// banner2
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  autoplay: true,
  watchSlidesProgress: true,
});

var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  autoplay: true,
  effect: 'fade',
  navigation: {
    nextEl: ".banner2-next",
    prevEl: ".banner2-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

var swiper = new Swiper(".banner1-slider", {
  slidesPerView: "auto",
  speed: 1200,
  spaceBetween: 15,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  autoplay: true,
  loop: true,
  roundLengths: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: 'true',
  },
  navigation: {
    nextEl: '.banner1-prev',
    prevEl: '.banner1-next',
  },
});

var swiper = new Swiper(".banner2-slider", {
  slidesPerView: "auto",
  speed: 1200,
  spaceBetween: 15,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  // autoplay: true,
  loop: true,
  roundLengths: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: 'true',
  },
  navigation: {
    nextEl: '.banner1-prev',
    prevEl: '.banner1-next',
  },
});

// banner4-slider
var swiper = new Swiper(".banner4-slider", {
  slidesPerView: "auto",
  speed: 1200,
  spaceBetween: 15,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  autoplay: true,
  loop: true,
  // roundLengths: true,
  pagination: {
    el: ".swiper-banner-pagination",
    clickable: true,
  },
});

// banner5-slider
var swiper = new Swiper(".banner5-slider", {
  slidesPerView: "auto",
  speed: 1200,
  spaceBetween: 15,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  autoplay: true,
  loop: true,
  // roundLengths: true,
  pagination: {
    el: ".swiper-pagination-number",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

  // best-plan-slider
var swiper = new Swiper(".best-plan-slider", {
  slidesPerView: "auto",
  speed: 1200,
  spaceBetween: 25,
  // autoplay: true,
  loop: true,
  roundLengths: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: 'true',
  },
  navigation: {
    nextEl: '.plan1-prev',
    prevEl: '.plan1-next',
  },
  breakpoints: {
      280:{
          slidesPerView: "auto",
        navigation: false,
        },
    576:{
      slidesPerView: 2,
      navigation: false,
    },
    768:{
      slidesPerView: 2,
      navigation: false,
    },
    992:{ 
      slidesPerView: 3
    },
    1200:{
      slidesPerView: 3
    },
  }
});


  // offer-slider
  var swiper = new Swiper(".offer-slider", {
    slidesPerView: "auto",
    speed: 1200,
    spaceBetween: 25,
    autoplay: true,
    loop: true,
    roundLengths: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: 'true',
    },
    navigation: false,
    breakpoints: {
        280:{
            slidesPerView: "auto",
          navigation: false,
          },
      576:{
        slidesPerView: "auto",
        navigation: false,
      },
      768:{
        slidesPerView: 2,
        navigation: false,
      },
      992:{ 
        slidesPerView: 3
      },
      1200:{
        slidesPerView: 3
      },
    }
  });

  // partner-slider
  var swiper = new Swiper(".partner-slider", { 
    slidesPerView: 2,
    speed: 1200,
    spaceBetween: 20,
    autoplay: true,
    loop: true,
    roundLengths: true,
    
    breakpoints: {
      280:{
          slidesPerView: 2,
        navigation: false,
        },
        320:{
          slidesPerView: 2,
        navigation: false,
        },
      576:{
        slidesPerView: 3,
        navigation: false,
      },
      768:{
        slidesPerView: 4,
        navigation: false,
      },
      992:{ 
        slidesPerView: 5
      },
      1200:{
        slidesPerView: 5
      },
      1400:{
        slidesPerView: 6
      },
    }
  });
  
   // insta-feed-slider
   var swiper = new Swiper(".insta-feed-slider", { 
    slidesPerView: "auto",
    // speed: 800,
    loop: true,
    freeMode: true,
    spaceBetween: 0,
    grabCursor: true,
    slidesPerView: 7,
    loop: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: true
    },
    freeMode: true,
    speed: 5000,
    freeModeMomentum: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: 'true',
    },
    breakpoints: {
        280:{
            slidesPerView: "auto",
          navigation: false,
          },
          386:{
            slidesPerView: 2,
            navigation: false,
          },
      576:{
        slidesPerView: 3,
        navigation: false,
      },
      768:{
        slidesPerView: 4,
        navigation: false,
      },
      992:{ 
        slidesPerView: 5
      },
      1200:{
        slidesPerView: 5
      },
      1400:{
        slidesPerView: 6
      },
    }
  });
    // insta-feed-slider
    var swiper = new Swiper(".wild-package-slider", {  
      slidesPerView: "auto",
      speed: 800,
      loop: true,
      freeMode: true,
      spaceBetween: 0,
      grabCursor: true,
      slidesPerView: 7,
      loop: true,
      // autoplay: {
      //   delay: 1,
      //   disableOnInteraction: true
      // },
      // freeMode: true,
      freeModeMomentum: false,
      navigation: {
        nextEl: '.wild-package-prev',
        prevEl: '.wild-package-next',
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: 'true',
      },
      breakpoints: {
          280:{
              slidesPerView: "auto",
            navigation: false,
            },
            420:{
              slidesPerView: 2,
              navigation: false,
            },
        576:{
          slidesPerView: 2,
          navigation: false,
        },
        768:{
          slidesPerView: 3,
          navigation: false,
        },
        992:{ 
          slidesPerView: 3
        },
        1200:{
          slidesPerView: 4
        },
        1400:{
          slidesPerView: 4
        },
      }
    });

    // package slidder-2
    var swiper = new Swiper(".package-slider2", {  
      slidesPerView: "auto",
      speed: 800,
      loop: true,
      freeMode: true,
      spaceBetween: 25,
      grabCursor: true,
      slidesPerView: 7,
      loop: true,
      // autoplay: {
      //   delay: 1,
      //   disableOnInteraction: true
      // },
      // freeMode: true,
      freeModeMomentum: false,
      navigation: {
        nextEl: '.package2-prev',
        prevEl: '.package2-next',
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: 'true',
      },
      breakpoints: {
          280:{
              slidesPerView: "auto",
            navigation: false,
            },
            420:{
              slidesPerView: "auto",
              navigation: false,
            },
        576:{
          slidesPerView: 2,
          navigation: false,
        },
        768:{
          slidesPerView: 2,
          navigation: false,
        },
        992:{ 
          slidesPerView: 3
        },
        1200:{
          slidesPerView: 3
        },
        1400:{
          slidesPerView: 3
        },
        1500:{
          slidesPerView: 4
        },
      }
    });

  // testimoanil slider
  new Swiper(".testimonial1-slider", {
    slidesPerView: "auto",
    speed: 1000,
    autoplay: true,
    spaceBetween: 25,
    loop: true,
    roundLengths: true,
    pagination: {
      el: ".testimonial1-pagination",
      clickable: 'true',
    }
  });

  new Swiper(".testimonial2-slider", {
    slidesPerView: "auto",
    speed: 1000,
    autoplay: true,
    spaceBetween: 45,
    loop: true,
    roundLengths: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: 'true',
    },
    navigation: {
      nextEl: ".testi2-next",
      prevEl: ".testi2-prev",
    },
    breakpoints: {
      280:{
          slidesPerView: "auto",
        navigation: false,
        },
        386:{
          slidesPerView: "auto",
          navigation: false,
        },
    576:{
      slidesPerView: "auto",
      navigation: false,
    },
    768:{
      slidesPerView: "auto",
      navigation: false,
    },
    992:{ 
      slidesPerView: 2
    },
  }
  });

  new Swiper(".testimonial4-slider", {
    slidesPerView: "auto",
    speed: 1000,
    autoplay: true,
    spaceBetween: 25,
    loop: true,
    roundLengths: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: 'true',
    },
    navigation: {
      nextEl: ".testi4-next",
      prevEl: ".testi4-prev",
    },
    breakpoints: {
      280:{
          slidesPerView: "auto",
        navigation: false,
        },
        386:{
          slidesPerView: "auto",
          navigation: false,
        },
    576:{
      slidesPerView: "auto",
      navigation: false,
    },
    768:{
      slidesPerView: "auto",
      navigation: false,
    },
    992:{ 
      slidesPerView: 2
    },
  }
  });

  new Swiper(".testimonial5-slider", {
    slidesPerView: "auto",
    speed: 1000,
    autoplay: true,
    spaceBetween: 25,
    loop: true,
    roundLengths: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: 'true',
    },
    navigation: {
      nextEl: ".testi2-next",
      prevEl: ".testi2-prev",
    },
    breakpoints: {
      280:{
          slidesPerView: "auto",
        navigation: false,
        },
        386:{
          slidesPerView: "auto",
          navigation: false,
        },
    576:{
      slidesPerView: "auto",
      navigation: false,
    },
    768:{
      slidesPerView: "auto",
      navigation: false,
    },
    992:{ 
      slidesPerView: 2
    },
  }
  });

    // trip-category-slider
    var swiper = new Swiper(".trip-category-slider", {
      slidesPerView: "auto",
      speed: 1200,
      spaceBetween: 25,
      // autoplay: true,
      loop: true,
      roundLengths: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: 'true',
      },
      navigation: false,
      breakpoints: {
          280:{
              slidesPerView: "auto",
            navigation: false,
            },
        576:{
          slidesPerView: "auto",
          navigation: false,
        },
        768:{
          slidesPerView: 2,
          navigation: false,
        },
        992:{ 
          slidesPerView: 3
        },
        1200:{
          slidesPerView: 3
        },
      }
    });
    
    // tour-package-selider
    var swiper = new Swiper(".tour-package-selider", { 
      slidesPerView: "auto",
      speed: 1200,
      spaceBetween: 20,
      autoplay: true,
      loop: true,
      roundLengths: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: 'true',
      },
      navigation: {
        nextEl: ".package1-next",
        prevEl: ".package1-prev",
      },
      breakpoints: {
          280:{
              slidesPerView: "auto",
            navigation: false,
          },
          386:{
            slidesPerView: "auto",
            navigation: false,
          },
        576:{
          slidesPerView: 2,
          navigation: false,
        },
        768:{
          slidesPerView: 2,
          navigation: false,
        },
        992:{ 
          slidesPerView: 3
        },
        1200:{
          slidesPerView: 3
        },
        1400:{
          slidesPerView: 4
        },
      }
    });

      // Destination5-slider
   var swiper = new Swiper(".destination5-slider", { 
    slidesPerView: "auto",
    speed: 800,
    spaceBetween: 25,
    autoplay: true,
    loop: true,
    roundLengths: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: 'true',
    },
    navigation: {
      nextEl: ".destination5-next",
      prevEl: ".destination5-prev",
    },
    breakpoints: {
        280:{
            slidesPerView: "auto",
          navigation: false,
          },
          420:{
            slidesPerView: 2,
            navigation: false,
          },
      576:{
        slidesPerView: 2,
        navigation: false,
      },
      768:{
        slidesPerView: 3,
        navigation: false,
      },
      992:{ 
        slidesPerView: 4
      },
      1200:{
        slidesPerView: 4
      },
      1400:{
        slidesPerView: 5
      },
    }
  });
 
  var swiper = new Swiper(".blog-slider", {
    slidesPerView: "auto",
    speed: 1200,
    spaceBetween: 15,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    autoplay: true,
    loop: true,
    roundLengths: true,
    navigation: {
      nextEl: '.blog1-prev',
      prevEl: '.blog1-next',
    },
  });


// Odometer Counter

$(".counter-single").each(function () {
  $(this).isInViewport(function (status) {
  if (status === "entered") {
      for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
      var el = document.querySelectorAll('.odometer')[i];
      el.innerHTML = el.getAttribute("data-odometer-final");
      }
  }
  });
});


// Magnific Popup video
$('.popup-youtube').magnificPopup({
  type: 'iframe'
});

$('.image-open').magnificPopup({
  type: 'image',
  gallery:{
    enabled:true,
  }
});

  (function($){
  $.fn.cinemaEmbed = function(){
    return $(this).each(function() {
      var $el = $(this);
      var cinema = {
        icons: {
          "pause": ["pause", "&#xE034;"],
          "pause": ["pause", "&#xE034;"],
          "fullscreen": ["aspect_ratio", "&#xE85B;"],
          "subtitles": ["closed_caption", "&#xE01C;"],
          "volumeMax": ["volume_up", "&#xE050;"],
          "volumeMid": ["volume_down", "&#xE04D;"],
          "volumeMin": ["volume_mute", "&#xE04E;"]
        },
        
        init: function() {
          cinema.mouseDown = false;
          cinema.mouseDownInterval = "";
          cinema.namespace = ".cinema";
          cinema.cursorX;
          cinema.cursorY;
          cinema.$parent = $el;
          cinema.setup();
        },

        setup: function() {
          cinema.$loading = $("<div class='loading'></div>");
          $el.append(cinema.$loading);
          
          cinema.$video = $("<video />", {
            "src": $el.data().src // || brightcoveAPI?
          })
          
          if ($el.data().vtt) {
            var track = $el.data().vtt;
            var $track = $("<track src='"+track+"' kind='subtitles' srclang='en' label='English subtitles' />");
            cinema.$video.append($track);
          }
          $el.prepend(cinema.$video);
          cinema.video = cinema.$video.get(0);
         
          if ($el.data().time) {
            cinema.video.currentTime = $el.data().time;
          }
          
          var controls = [];
          cinema.$controls = $("<div class='controls'></div>");
          
          cinema.$subtitles = cinema.$play = $("<button type='button' class='subtitles icon' aria-label='subtitles button' title='subtitles'>&#xE01C;</button>");
          controls.push(cinema.$subtitles);
          
          cinema.$play = $("<button type='button' class='play icon' aria-label='play button' title='play'>&#xE037;</button>");
          controls.push(cinema.$play);
          
          cinema.$mute= $("<button type='button' class='mute icon' aria-label='volume control' title='volume'>&#xE050;</button>");
          controls.push(cinema.$mute);
          
          cinema.$fullscreen= $("<button type='button' class='fullscreen icon' aria-label='fullscreen button' title='fullscreen'>&#xE85B;</button>");
          controls.push(cinema.$fullscreen);
          
          cinema.$aspect = $("<button type='button' class='aspect icon'>aspect_ratio</button>");
          controls.push(cinema.$aspect);
          
          cinema.$scrubber = $("<progress class='scrubber' value='0' max='100'></progress>");
          controls.push(cinema.$scrubber);
          
          cinema.$timing = $("<div class='timing' data-current='0' data-duration='0' aria-label='time left' title='timing'></div>");
          controls.push(cinema.$timing);
          
          cinema.$volumeControls = $("<div class='volume-controls'></div>");
          cinema.$volume = $("<input type='range' class='volume' min='0' max='1' step='0.1' value='1'>");
          cinema.$volumeControls.append(cinema.$volume)
          controls.push(cinema.$volumeControls);
          
          cinema.$controls.html(controls);
          $el.append(cinema.$controls);

          cinema.bindControls();
        },
        
        bindControls: function () {
          // bind controls              
          cinema.video.addEventListener("progress", cinema.loading);        
          cinema.$subtitles.on("click"+cinema.namespace, cinema.toggleSubtitles);
          cinema.$play.on("click"+cinema.namespace, cinema.togglePlayPause);
          cinema.$timing.on("click"+cinema.namespace, cinema.toggleTimeleft);
          cinema.$video.on("timeupdate"+cinema.namespace, cinema.update)
            .on("click"+cinema.namespace, cinema.togglePlayPause);
          cinema.$fullscreen.on("click"+cinema.namespace, cinema.goFullscreen);
          cinema.$aspect.on("click"+cinema.namespace, cinema.aspect);
          cinema.$mute.on("click"+cinema.namespace, cinema.toggleMute);
          cinema.$volume.on("change"+cinema.namespace, cinema.updateVolume);
          cinema.$scrubber.on("mousedown"+cinema.namespace, function() {
            cinema.pause(true);
            cinema.mouseDown = true;
            cinema.mouseDownInterval = setInterval(cinema.scrubberHandler, 10);
          }).on("mouseup"+cinema.namespace, function() {
            cinema.mouseDown = false;
            if (!cinema.$parent.hasClass("paused")) {
              cinema.play();
            }
          }).hover( null, function() {
            cinema.mouseDown = false;
          }).on("mousemove", function(e) {
            cinema.cursorX = e.pageX;
            cinema.cursorY = e.pageY;
          });
        },

        loading: function() { 
          if (cinema.video.readyState === 4) {
            cinema.loading = false;
            cinema.$parent.addClass("loaded");
            cinema.$loading.fadeOut(250, cinema.$loading.remove);
            cinema.update(); 
          } else {
            setTimeout(cinema.loading, 200);
          }
        },

        play: function() {
          cinema.video.play();
          cinema.$play.html("&#xE034;");
          cinema.$parent.removeClass("paused");
        },

        pause: function(scrubbing) {
          cinema.video.pause();
          cinema.$play.html("&#xE037;");
          if (!scrubbing) {
            cinema.$parent.addClass("paused");
          }
        },

        togglePlayPause: function() {
          if (cinema.video.paused == true) {
            cinema.play();
            cinema.scrubberInterval = setInterval(cinema.update, 20);
          } else {
            cinema.pause();
            clearInterval(cinema.scrubberInterval);
          }
        },
        
        toggleSubtitles: function () {
          var textTracks = cinema.video.textTracks[0];
          if (textTrack.mode == "disabled") {
            textTrack.mode = "showing";
            cinema.$parent.addClass("captioned");
          } else {
            textTrack.mode = "disabled";
            cinema.$parent.removeClass("captioned");
          }
        },

        toggleMute: function() {
          if (cinema.video.muted == false) {
            cinema.video.muted = true;
            cinema.$parent.addClass("muted");
            cinema.$mute.html("&#xE04F;"); // volume_off
          } else {
            cinema.video.muted = false;
            cinema.$parent.removeClass("muted");
            cinema.updateVolume();
          }
        },

        goFullscreen: function() {
          if (cinema.video.requestFullscreen) {
            cinema.video.requestFullscreen();
          } else if (cinema.video.mozRequestFullScreen) {
            cinema.video.mozRequestFullScreen(); // Firefox
          } else if (cinema.video.webkitRequestFullscreen) {
            cinema.video.webkitRequestFullscreen(); // Chrome and Safari
          }
        },

        seek: function() {
          var time = cinema.video.duration * (cinema.$scrubber.val() / 100);
          cinema.video.currentTime = time;
        },

        aspect: function() {
          cinema.$parent.toggleClass("four-three");
        },

        toggleTimeleft: function() {
          cinema.$parent.toggleClass("timeleft");
        },

        update: function() {
          var duration = cinema.video.duration;
          var current = cinema.video.currentTime;
          var timeleft = duration - current;
          var value = (100 / duration) * current;
          
          if (current != cinema.lastcurrent) {
            cinema.$timing
              .attr("data-current", cinema.convertTime(current))
              .attr("data-duration", cinema.convertTime(duration))
              .attr("data-timeleft", cinema.convertTime(timeleft));
          }
          cinema.lastcurrent = current;
          
          cinema.$scrubber.val(value);
          if (duration == current) {
            cinema.$play.html("&#xE042;");
          }
        },

        convertTime: function(val) {
          val = parseInt(val, 10);
          var hours = Math.floor(val / 3600);
          var minutes = Math.floor((val - (hours * 3600)) / 60);
          var seconds = val - (hours * 3600) - (minutes * 60);
          var time = "";
          if (hours > 0 && minutes < 10) minutes = "0" + minutes;
          if (seconds < 10) seconds = "0" + seconds;
          if (parseInt(hours) > 0) time += hours+":";
          time += minutes + ":" + seconds;
          return time;
        },

        updateVolume: function() {
          var value = cinema.$volume.val();
          cinema.video.volume = value;
          if (value == 0) {
            cinema.$mute.html("&#xE04E;");
          } else if (value < .5) {
            cinema.$mute.html("&#xE04D;");
          } else if (value >= .5) {
            cinema.$mute.html("&#xE050;");
          }
          if (cinema.$parent.hasClass("muted")) {
            cinema.toggleMute();
          }
        },
 
        scrubberHandler: function() {
          if (cinema.mouseDown == false) {
            clearInterval(cinema.mouseDownInterval);
            return;
          }
          var mouseX = cinema.cursorX;
          var offset = cinema.$scrubber.offset().left;
          var leftPosition = mouseX - offset;
          var progressWidth = cinema.$scrubber.width();
          var percentage = (leftPosition / progressWidth) * 100;
          cinema.$scrubber.val(percentage);
          cinema.seek();
        }
      }
      cinema.init();
    });
  };
})(jQuery);
$('.cinema-embed').cinemaEmbed();

// star-rating
$('.star-icon').each(function() {
  $(this).hover(function() {
    $(this).prevAll().addBack().css("color", "#1eccd1");
  }, function() {
    if (!$(this).parent().attr("data-rating")) {
      $(this).prevAll().addBack().css("color", "lightgrey");
    } else {
      $(this).siblings().addBack().each(function(index) {
        index + 1 <= $(this).parent().attr("data-rating") ? 
          $(this).css("color", "#1eccd1") : $(this).css("color", "lightgrey");
      });
    }
  }).click(function () {
    $(this).parent().attr("data-rating", $(this).prevAll().length + 1);
  });
});


// scroll up button
document.addEventListener("DOMContentLoaded", function(event) {
        
  let offset = 50;
  let circleContainer = document.querySelector(".circle-container");
  let circlePath = document.querySelector('.circle-container path');
  let pathLength = circlePath.getTotalLength();
  circlePath.style.transition = circlePath.style.WebkitTransition = 'none';
  circlePath.style.strokeDasharray = pathLength;
  circlePath.style.strokeDashoffset = pathLength;
  circlePath.getBoundingClientRect();
  circlePath.style.transition = circlePath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

  let updateLoader = () => {

    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;
    let height = docHeight - winHeight;
    let progress = pathLength - (scrollTop * pathLength / height);
    circlePath.style.strokeDashoffset = progress;

    if (scrollTop > offset) {
      circleContainer.classList.add("active");
    } else {
      circleContainer.classList.remove("active");
    }
          
  }
circleContainer.onclick = function(){
  window.scrollTo({ top: 0, behavior: 'smooth'});
}

window.onscroll = () => {
  updateLoader();
}
updateLoader();
});


// range slider
$('#price-range-submit').hide();

	$("#min_price,#max_price").on('change', function () {

	  $('#price-range-submit').show();

	  var min_price_range = parseInt($("#min_price").val());

	  var max_price_range = parseInt($("#max_price").val());

	  if (min_price_range > max_price_range) {
		$('#max_price').val(min_price_range);
	  }

	  $("#slider-range").slider({
		values: [min_price_range, max_price_range]
	  });
	  
	});


	$("#min_price,#max_price").on("paste keyup", function () {                                        

	  $('#price-range-submit').show();

	  var min_price_range = parseInt($("#min_price").val());

	  var max_price_range = parseInt($("#max_price").val());
	  
	  if(min_price_range == max_price_range){

			max_price_range = min_price_range + 100;
			
			$("#min_price").val(min_price_range);		
			$("#max_price").val(max_price_range);
	  }

	  $("#slider-range").slider({
		values: [min_price_range, max_price_range]
	  });

	});


	$(function () {
	  $("#slider-range").slider({
		range: true,
		orientation: "horizontal",
		min: 0,
		max: 10000,
		values: [0, 10000],
		step: 100,

		slide: function (event, ui) {
		  if (ui.values[0] == ui.values[1]) {
			  return false;
		  }
		  
		  $("#min_price").val(ui.values[0]);
		  $("#max_price").val(ui.values[1]);
		}
	  });

	  $("#min_price").val($("#slider-range").slider("values", 0));
	  $("#max_price").val($("#slider-range").slider("values", 1));

	});

	$("#slider-range,#price-range-submit").click(function () {

	  var min_price = $('#min_price').val();
	  var max_price = $('#max_price').val();

	  $("#searchResults").text("Here List of products will be shown which are cost between " + min_price  +" "+ "and" + " "+ max_price + ".");
	});

  // range-slider-mobile

  $(function () {
	  $("#slider-range-mobile").slider({
		range: true,
		orientation: "horizontal",
		min: 0,
		max: 10000,
		values: [0, 10000],
		step: 100,

		slide: function (event, ui) {
		  if (ui.values[0] == ui.values[1]) {
			  return false;
		  }
		  
		  $("#min_price-mobile").val(ui.values[0]);
		  $("#max_price-mobile").val(ui.values[1]);
		}
	  });

	  $("#min_price-mobile").val($("#slider-range-mobile").slider("values", 0));
	  $("#max_price-mobile").val($("#slider-range-mobile").slider("values", 1));

	});

	$("#slider-range-mobile,#price-range-submit").click(function () {

	  var min_price = $('#min_price-mobile').val();
	  var max_price = $('#max_price-mobile').val();

	  $("#searchResults").text("Here List of products will be shown which are cost between " + min_price  +" "+ "and" + " "+ max_price + ".");
	});

  // package sidebar filter

  $('.filter-button').on("click", function(){
  $('.tour-package-sidebar-mobile').toggleClass('show');
});

$('.package-sidebar-close').on("click", function(){
  $('.tour-package-sidebar-mobile').removeClass('show');
});

// password-hide and show
   
const togglePassword = document.querySelector('#togglePassword');

const password = document.querySelector('#password');

if(togglePassword){
 togglePassword.addEventListener('click', function (e) {
   const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
   password.setAttribute('type', type);
   // toggle the eye / eye slash icon
   this.classList.toggle('bi-eye');
 });
}

// confirm-password
const togglePassword2= document.getElementById('togglePassword2');

const password2 = document.querySelector('#password2');

if (togglePassword2){
 togglePassword2.addEventListener('click', function (e) {
   const type = password2.getAttribute('type') === 'password' ? 'text' : 'password';
   password2.setAttribute('type', type);
   // toggle the eye / eye slash icon
   this.classList.toggle('bi-eye');
 });
}





}(jQuery));