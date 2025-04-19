console.log("works fine");
$(document).ready(function(){
//==================================================    
// OWL CAROUSEL FUNCTION
//================================================== 
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:300,
        nav:true,
        items:1,
        dots:true,
        responsiveClass:true,
    		responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	        768:{
	            items:3,
	            nav:true,
	            margin:0,
	            loop:true
	        }
	    }
	      });

//==================================================    
// TOP BUTTON FUNCTION
//================================================== 

  $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#scrollToTop').fadeIn();
        } else {
            $('#scrollToTop').fadeOut();
        }
    });
    
    $('#scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });


//==================================================    
// STICKY HEADER FUNCTION
//================================================== 

        var header = $(".header");
    var headerOffset = header.offset().top;

    $(window).scroll(function() {
        if ($(window).scrollTop() > headerOffset) {
            header.addClass("sticky");
        } else {
            header.removeClass("sticky");
        }
    });

//==================================================    
// FIRST MODAL FUNCTION
//================================================== 

    $('#openModal').click(function(){
        $('#myModal').fadeIn();
        $("body").css('overflow', "hidden");
        $(".drop").fadeIn();
    });

   
    $('.modal-close').click(function(){
        $('#myModal').fadeOut();
        $("body").css('overflow', "auto");
        $(".drop").fadeOut();
    });

  
    $(window).click(function(event){
        if ($(event.target).is('#myModal')) {
            $('#myModal').fadeOut();
            $("body").css('overflow', "auto");
            $(".drop").fadeOut();
        }
    });
//==================================================
//    ABOUT MODAL
//==================================================

        $('#openModalAbout').click(function(){
        $('#AboutModal').fadeIn();
        $("body").css('overflow', "hidden");
        $(".drop").fadeIn();
    });

   
    $('.modal-close').click(function(){
        $('#AboutModal').fadeOut();
        $("body").css('overflow', "auto");
        $(".drop").fadeOut();
    });

  
    $(window).click(function(event){
        if ($(event.target).is('#AboutModal')) {
            $('#AboutModal').fadeOut();
            $("body").css('overflow', "auto");
            $(".drop").fadeOut();
        }
    });    
//==================================================    
// NAVBAR BUTTON ON MOBILE
//================================================== 
    var isNewLogoDisplayed = false;
    $(".menu-btn").click(function(){
        if($(window).width() < 600) {
            $(".nav-list").toggleClass("hidden").addClass('slide-in-left');
            
            if(isNewLogoDisplayed) {

                $(".menu-btn i").removeClass("fa-bars").addClass("fa-times");
                
                isNewLogoDisplayed = false;
            } else {
                
                $(".menu-btn i").removeClass("fa-times").addClass("fa-bars");
                
                isNewLogoDisplayed = true;
            }
        }

    });
//==================================================    
// NAVBAR BUTTON ON MOBILE
//==================================================

//==================================================    
// VIDEO MODAL OPEN & CLOSURE
//==================================================  


    $('#openModal2').click(function(){
        var youtubeUrl = $(this).data('youtube-url');
        $('#myModal-video').fadeIn();
        $(".drop-2").fadeIn();
        loadYouTubeVideo(youtubeUrl);
        $("body").css('overflow', "hidden");
        
    });

    // Close modal when close button is clicked
    $('.modal-close').click(function(){
        $('#myModal-video').fadeOut();
        $(".drop-2").fadeOut();
        stopYouTubeVideo();
        $("body").css('overflow', "auto");
        
    });

    // Close modal when clicking outside of it
    $(window).click(function(event){
        if ($(event.target).is('.sixth')) {
            $('#myModal-video').fadeOut();
            $(".drop-2").fadeOut();
            stopYouTubeVideo();
            $("body").css('overflow', "auto");
            
        }
    });
//==================================================    
// VIDEO MODAL OPEN & CLOSURE
//================================================== 

//====================================================
// REVEAL WHEN SCROLL FUNCTION
// ===================================================
        function reveal() {
      var reveals = document.querySelectorAll(".reveal");

      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }

    window.addEventListener("scroll", reveal);
//====================================================
// REVEAL WHEN SCROLL FUNCTION
// ===================================================

//====================================================
// ROTATE WHEN SCROLL FUNCTION
// ===================================================
    // $(window).scroll(function() {
    //     var scrollTop = $(window).scrollTop();
    //     var sectionOffset = $('.first-about, .gallery').offset().top;
    //     var rotateAngle = (scrollTop - sectionOffset) * 0.04; 

        
    //     $('.triangle-shape ,.gallery-mp').css({
    //       transform: 'rotate(' + rotateAngle + 'deg)'
    //     });
    //   });
//====================================================
// ROTATE WHEN SCROLL FUNCTION
// ===================================================

//====================================================
// MENU PAGINATION
// ===================================================
    var currentPage = 0;
        var numPages = $('.menu-page').length;

        // Hide all menu pages except the first one
        $('.menu-page').hide();
        $('.menu-page').eq(0).show();

        // Function to show the current page
        function showPage(pageIndex) {
          $('.menu-page').hide();
          $('.menu-page').eq(pageIndex).show();
        }

        // Event listener for next button
        $('.next-page').click(function() {
          if (currentPage < numPages - 1) {
            currentPage++;
            showPage(currentPage);
          }
        });

        // Event listener for previous button
        $('.prev-page').click(function() {
          if (currentPage > 0) {
            currentPage--;
            showPage(currentPage);
          }
        });
//====================================================
// MENU PAGINATION
// ===================================================
//====================================================
// TABS FUNCTION
// ===================================================
$('.tab').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('.tab').removeClass('active');
    $('.tab-content').removeClass('active');

    $(this).addClass('active');
    $("#" + tab_id).addClass('active');
})

$('.tab-content').each(function() {
    var $accordionContent = $(this);
    var $accordionHeading = $('<div class="accordion-heading">Click for details</div>').insertBefore($accordionContent);
    $accordionHeading.append($accordionContent.prev('.tab').clone());

    $accordionHeading.click(function() {
      $(this).toggleClass('active');
      $accordionContent.slideToggle();
    });
  });
//====================================================
// TABS FUNCTION
// ===================================================

//====================================================
// MENU PRICING 
// ===================================================
$('.menu-item-name-input').on('input', function() {
    var inputWidth = $(this).outerWidth(); // Get the width of the input
    $('.menu-item-line').css('width', inputWidth + 'px'); // Set the width of the line
});
//====================================================
// MENU PRICING 
// ===================================================
//===================================END=========================== 
//====================================================
// MAP URL 
// ===================================================

$(document).ready(function() {
    var mapUrl = $('#map-url').val();
    if(mapUrl) {
        $('#map-iframe-container').html('<iframe src="' + mapUrl + '"  frameborder="0" style="border:0;"></iframe>');
    } else {
        console.log("ok");
    }
});

//====================================================
// MAP URL 
// ===================================================
});  //========= Document ready closure ==============

//=============================================
// LOAD VIDEO ID & URL
//=============================================
function loadYouTubeVideo(youtubeUrl) {
        var videoId = getYouTubeVideoId(youtubeUrl);
        var youtubeEmbedUrl = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1';
        var iframe = $('<iframe>', {
            id: 'youtubeVideo',
            width: '100%',
            height: '100%',
            frameborder: '0',
            allowfullscreen: true,
            src: youtubeEmbedUrl
        });
        $('#videoContainer').append(iframe);
    }

    function stopYouTubeVideo() {
        $('#youtubeVideo').remove();
    }

    function getYouTubeVideoId(url) {
        var regExp = /^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
        if (match && match[1].length === 11) {
            return match[1];
        } else {
            // Handle invalid YouTube URL
            console.error('Invalid YouTube URL');
            return null;
        }
    }