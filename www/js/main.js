$(function() {
    "use-strict";
    $(".side-nav-right").sideNav({
        edge: "right",
        closeOnClick: !1
    }), $(".slider").slider({
        full_width: !0,
        slideSpeed: 1000
    }), $("#owl-testimonial").owlCarousel({
        slideSpeed: 600,
        paginationSpeed: 800,
        singleItem: !0
    }), $(".latest-news-owl").owlCarousel({
        autoPlay: !1,
        singleItem: !0
    }), $("#fakeLoader").fakeLoader({
        zIndex: 999,
        spinner: "spinner1",
        bgColor: "#ffffff"
    })
});

var options = {
  message: 'Invite your society or organization member to use your application, Please visit ',
  subject: 'Refer App',
  url: 'https://www.aarvitechnology.com/Society-Management-System/',
  chooserTitle: 'Share With',
};
var onSuccess = function (result) {
  console.log("Share completed? " + result.completed); // On Android apps mostly return false even while it's true
  console.log("Shared to app: " + result.app); // On Android result.app since plugin version 5.4.0 this is no longer empty. On iOS it's empty when sharing is cancelled (result.completed=false)
};

var onError = function (msg) {
  console.log("Sharing failed with message: " + msg);
};

function shareFunction() {
  window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);
}