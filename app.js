$(".skills").click(function() {
    $('html,body').animate({
        scrollTop: $(".my-skills-section").offset().top},
        'slow');
});

$(".about").click(function() {
    $('html,body').animate({
        scrollTop: $("#About-section").offset().top},
        'slow');
    $('#About-section').css('margin-top',120);
});

$(".work").click(function() {
    $('html,body').animate({
        scrollTop: $("#work-section").offset().top},
        'slow');
});
$(".hire-me").click(function() {
    $('html,body').animate({
        scrollTop: $("#hire-me-section").offset().top},
        'slow');
});

$(function () {
    $(document).scroll(function () {
        // debugger
      var $nav = $(".fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

var header = document.getElementById("navbarContent");
var navlinks = header.getElementsByClassName("nav-link");
for (var i = 0; i < navlinks.length; i++) {
    navlinks[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    // debugger
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}