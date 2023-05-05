import jQuery from "jquery";


jQuery(document).ready(function () {
  dizme_tm_trigger_menu();
  (".anchor_nav").onePageNav();
});
function dizme_tm_trigger_menu() {   
    var hamburger = jQuery(".trigger .hamburger");
    var mobileMenu = jQuery(".dizme_tm_mobile_menu .dropdown");
    var mobileMenuList = jQuery(
      ".dizme_tm_mobile_menu .dropdown .dropdown_inner ul li a"
    );
    hamburger.on("click", function () {
      var element = jQuery(this);
      if (element.hasClass("is-active")) {
        element.removeClass("is-active");
        mobileMenu.slideUp();
      } else {
        element.addClass("is-active");
        mobileMenu.slideDown();
      }
      return false;
    });
    mobileMenuList.on("click", function () {
      jQuery(".trigger .hamburger").removeClass("is-active");
      mobileMenu.slideUp();
      return false;
    });
  }

// jQuery(".anchor_nav").onePageNav();

  