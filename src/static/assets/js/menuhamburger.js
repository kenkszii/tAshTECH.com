import jQuery from "jquery";

export function initializeDropdown() {
  jQuery(document).ready(function ($) {
    var hamburger = $(".trigger .hamburger");
    var mobileMenu = $(".dizme_tm_mobile_menu .dropdown");
    var mobileMenuList = $(".dizme_tm_mobile_menu .dropdown .dropdown_inner ul li a");
    var isOpen = false;

    function openMenu() {
      hamburger.addClass("is-active");
      mobileMenu.slideDown();
      isOpen = true;
    }

    function closeMenu() {
      hamburger.removeClass("is-active");
      mobileMenu.slideUp();
      isOpen = false;
    }

    function toggleMenu() {
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    }

    hamburger.on("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      toggleMenu();
    });

    mobileMenu.on("click", function (e) {
      e.stopPropagation();
    });

    $(document).on("click", function () {
      if (isOpen) {
        closeMenu();
      }
    });

    mobileMenuList.on("click", function () {
      if (isOpen) {
        closeMenu();
      }
    });

    $(".anchor_nav").onePageNav();
  });
}
