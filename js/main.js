// Operation on nav links
$(".navbar-nav .nav-link").on("click", function () {
  // 1- remove active from all
  $(".navbar-nav .nav-link").removeClass("active");

  // 2- add active to clicked one
  $(this).addClass("active");

  // 3- close navbar collapse on mobile (اختياري)
  $(".navbar-collapse").collapse("hide");
});
