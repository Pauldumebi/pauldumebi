$(".carousel").carousel({
  interval: 2000,
});

$(".skills").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".my-skills-section").offset().top,
    },
    "slow"
  );
});

$(".about").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("#About-section").offset().top,
    },
    "slow"
  );
  $("#About-section").css("margin-top", 120);
});

$(".work").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("#work-section").offset().top,
    },
    "slow"
  );
});
$(".hire-me").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("#hire-me-section").offset().top,
    },
    "slow"
  );
});

$(function () {
  $(document).scroll(function () {
    // debugger
    var $nav = $(".fixed-top");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

var header = document.getElementById("navbarContent");
var navlinks = header.getElementsByClassName("nav-link");
for (var i = 0; i < navlinks.length; i++) {
  navlinks[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  // debugger
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

function sendEmail() {
  var name = document.getElementById("name").value;
  var phoneNumber = document.getElementById("phone-number").value;
  var submitEnquiry = document.getElementById("submit-enquiry").value;
  var subj = "Enquiry";
  parent.location =
    "mailto:paul.chukwurah10@gmail.com?subject=" +
    encodeURIComponent(subj) +
    `&body=${submitEnquiry}, from ${name}. ${phoneNumber}`;
}

document.addEventListener("DOMContentLoaded", function () {
  var i = 0;
  var txt =
    "Hi 👋, I am Chukwurah Paul a passionate Full-Stack Web Developer with expertise in both frontend and backend technologies, including HTML, CSS, JavaScript, PHP, Laravel, React, Vue.js, Next.js, and MySQL.";
  var speed = 30;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("profile-header").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

setTimeout(typeWriter, 1000);

});

// function typeWriter() {
//   if (i < txt.length) {
//     document.getElementById("demo").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }
