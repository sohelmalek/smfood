let headerBox = document.querySelector('#header');
let header_height = headerBox.clientHeight;
// document.write(header_height);
// main banner height height and decrease header height and margin top(size : header height) START
// let css_mt_height = `margin-top: ${header_height}px; height: calc(100vh - ${header_height}px); `;
let css_mt_height = `margin-top: ${header_height}px;`;
let banner_box = document.getElementById('main_banner');
if (banner_box) {
    banner_box.style.cssText = css_mt_height;
}
let css_mt = `margin-top: ${header_height}px;`;
let other_banner = document.getElementById('other_banner');

if (other_banner) {
    other_banner.style.cssText = css_mt;
}


// css_mt_height = `margin-top: ${header_height}px; `;
// banner_box = document.getElementById('sss');
// banner_box.style.cssText = css_mt_height;


// main banner height height and decrease header height and margin top(size : header height) END
// *****
// *****
// *****
// loader remove when page is loaded AND add scroll to body when loader is removed START
document.body.setAttribute("class", "noscroll");
window.onload = function () {
    document.getElementById("loader").style.display = "none";
    document.body.className = document.body.className.replace(/\bnoscroll\b/, '');
}
// loader remove when page is loaded AND add scroll to body when loader is removed END
// *****
// *****
// *****
//add class on scroll top START
let scrollY = window.scrollY;

function addClass_on_scroll() {
    headerBox.classList.remove('py-md-4');
    headerBox.classList.add('header_scrolled', 'py-md-2');

}

function removeClass_on_scroll() {
    headerBox.classList.add('py-md-4');
    headerBox.classList.remove('header_scrolled', 'py-md-2');

}
window.addEventListener('scroll', function () {
    if (window.scrollY > `${header_height}` / 3.9) {
        let scrollY = window.scrollY;
        addClass_on_scroll();
    } else {
        removeClass_on_scroll();
    }
});
//add class on scroll top END
//  ***
//  ***
//  ***
//  ***
// window RELOAD every resize screen START
// window.addEventListener('resize', function () {
//     window.location.reload();
// });
// window RELOAD every resize screen END

// var element = document.querySelector('.dropdown > a');

// element.classList.remove('dropdown-toggle');

// window.addEventListener('resize', function () {
//     var currentWidth = Math.min(window.innerWidth || Infinity, screen.width),
//         currentClass = currentWidth > 992 ? 'dropdown-toggle' : 'democlass';

//     // element.classList.add('no-transition');
//     element.classList.remove('dropdown-toggle', 'democlass');
//     element.classList.add(currentClass);
//     // element.classList.remove('no-transition');
// });
// $(window).on("load resize", function() {
//     if (this.matchMedia("(min-width: 992px)").matches) {
//         $('.dropdown > a').addClass("dropdown-toggle");

//     } else {
//         $('.dropdown > a').removeClass("dropdown-toggle");

//     }
// });
$(document).ready(function () {
    var runAlready, counting; function startCounter(e) { runAlready = !0, counting = !0, $(".counter-value").each(function () { var r = $(this); r.text(e), countTo = r.attr("data-count"), $({ countNum: r.text() }).animate({ countNum: countTo }, { duration: 2e3, easing: "swing", step: function () { r.text(Math.floor(this.countNum)) }, complete: function () { r.text(this.countNum), counting = !1 } }) }) }
    $(window).scroll(function () { var e = $("#counter").offset().top; (!runAlready && $(window).scrollTop() > e || !counting && $(window).scrollTop() < e) && startCounter(0) });
});
$(document).ready(function () {
    var swiper = new Swiper(".testimonial_slider", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },loop: true, spaceBetween: 10,
        // autoplay:true,
    });
});