/* AOS fadeup */
AOS.init();

//header menu
const $menuContainer = $('.menu > .container');
const $header = $('.header');
let isMenuHovered = false;

const activateCategory = ($navItem) => {
  $('.category > div').removeClass('on');

  if ($navItem.hasClass('navItem_brand')) {
    $('.category .brand').addClass('on');
  } else if ($navItem.hasClass('navItem_product')) {
    $('.category .product').addClass('on');
  } else if ($navItem.hasClass('navItem_interior')) {
    $('.category .interior').addClass('on');
  }
};

const openMenu = () => {
  $menuContainer.addClass('on');
  $header.addClass('on');
  gsap.to($menuContainer, { y: 0, opacity: 1 });
};

const closeMenu = () => {
  $menuContainer.removeClass('on');
  $header.removeClass('on');
  $('.category > div').removeClass('on');
  gsap.to($menuContainer, { y: -100, opacity: 0 });
};

$('.navItem_menu').on('mouseenter focusin', function () {
  isMenuHovered = true;
  activateCategory($(this));
  openMenu();
});

$('.navItem_menu').on('mouseleave focusout', function () {
  isMenuHovered = false;

  setTimeout(() => {
    if (!isMenuHovered) {
      closeMenu();
    }
  }, 100);
});


$menuContainer.on('mouseenter focusin', function () {
  isMenuHovered = true;
  openMenu();
});

$menuContainer.on('mouseleave focusout', function () {
  isMenuHovered = false;

  setTimeout(() => {
    if (!isMenuHovered) {
      closeMenu();
    }
  }, 100);
});

//mobile menu toggle
$('.utilItem.mobilemenu').click(function (e) { 
  e.preventDefault();
  $('.m-menu').toggleClass('on');
  gsap.fromTo('.m-gnb-item',
    {x: -100, opacity: 0},
    {x: 0, opacity: 1, stagger: .1}
  )
  gsap.fromTo('.m-aside',
    {opacity:0, x: -100},
    {opacity:1, x: 0}
  )
  gsap.fromTo('.m-sns',
    {opacity:0, y: 100},
    {opacity:1, y: 0}
  )
});

$('.m-util-item.m-close').click(function (e) { 
  e.preventDefault();
  $('.m-menu').removeClass('on');
});

//스크롤 시 헤더 숨김
let lastScroll = 0;
$(window).scroll(function(){
  curr = $(this).scrollTop();
  if (curr > lastScroll) {
    $('.header').addClass('hide')
  } else {
    $('.header').removeClass('hide')
  }
  lastScroll=curr;
})





//header 스크롤 색상
ScrollTrigger.create({
  trigger: '.space',
  start: 'top top',
  end: 'bottom top',
  onEnter: () => {
    document.querySelector('.header').classList.add('on');
  },
  onLeaveBack: () => { 
    document.querySelector('.header').classList.remove('on'); 
  },
  scrub: true,
});


//gnb swiper
var swiper = new Swiper(".gnb_bannerinner", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".gnb_banner .swiper-pagination",
      clickable: true,
    },
  });

//main visual
var swiper = new Swiper(".mainslide", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  });

  /* concept */
gsap.to('.concept .tab-nav-container', {
  scrollTrigger: {
    trigger: '.tab-contents',
    start: 'top 10%',
    end: '90% top',
    toggleActions: "play none none reverse",
    toggleClass: { targets: ".concept .tab-nav-container", className: "fixed" },
  }
  })
  
$('.concept .tab-item button').click(function (e) {
  e.preventDefault();

  let tabName = $(this).data('tab');

  $(this).addClass('on').closest('.tab-item').siblings().find('button').removeClass('on');

  $('.tab-content-item').removeClass('on');
  $(tabName).addClass('on');

  gsap.fromTo(tabName, 
    { opacity: 0, y: 100},
    { opacity: 1, y: 0}
);
});

$('[data-fade="up"]').each(function(i,el){
  windowStart = ($(this).data('wstart'))?$(this).data('wstart'):"50%"

  fadeUp = gsap.fromTo($(this).find('[data-fade="item"]'),{
    yPercent: 10, opacity: 0
  },{
      scrollTrigger: {
        trigger: $(this),
        start: `0% 100%`,
        end: "0% 80%",
        // markers:true,
        toggleActions:"none play none reset"
    },
    yPercent: 0, opacity: 1
  })

});

$('[data-fade="up"]').each(function(i,el){
  gsap.to($(this),{
    scrollTrigger: {
      trigger: $(this),
      start: "0% 100%",
      end: "100% 0%",
      scrub: true,
      //markers:true,
  },
  y:100
});
});

gsap.fromTo('.tab-title span',
  {yPercent: 100, opacity: 0},
  {yPercent: 0, opacity: 1,
    scrollTrigger: {
      trigger: '.tab-contents',
      start: "50% 50%",
      end: "50% 80%",
      scrub: true,
  }
  }
  );


/* madeIn */
  $('.videobtn').click(function (e) { 
    e.preventDefault();
    $('.videocover').css('opacity', 0);
  });

  /* pick */
  const pickSlide = new Swiper(".pickslide", {
    slidesPerView: 1,
    spaceBetween: 30,
    simulateTouch: false,
  });

    $('.pick-tab-item').click(function() {
      $(this).addClass('on').siblings().removeClass('on');
      
      var tabName = $(this).data('tab');
      
      var slideIndex = $('#' + tabName).index(); 
      
      pickSlide.slideTo(slideIndex);
    });


//space
var swiper = new Swiper(".spaceslide", {
  slidesPerView: 'auto',
  spaceBetween: 10,
  freeMode: true,
  breakpoints:{
    1024:{
      spaceBetween: 30,
    }
  }
});


