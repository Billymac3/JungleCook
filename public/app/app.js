function init() {
  let navOpen = false;

  $(".bars").click(function (e) {
    if (navOpen) {
      $(".nav-holder").css("display", "none");
      navOpen = false;
    } else {
      $(".nav-holder").css("display", "flex");
      navOpen = true;
    }
  });
}

function initButtons() {
  $("#home").click(function () {
    $("#addNav div").removeClass("active");
    $("#home div").addClass("active");

    $("#createMainNav").off();

    $(".text-wrapper").html(JUNGLE_SERVICE.getHomeContent());
    $(".btn-holder").html(JUNGLE_SERVICE.getHomeStartButton());
    addGetStartedListener();
  });
}

function addGetStartedListener() {
  $(".get-started").click(function (e) {
    console.log("hello");
    $("#home div").removeClass("active");
    $("#addNav div").addClass("active");

    $(".text-wrapper").html(JUNGLE_SERVICE.getGetStartedContent());
    $(".btn-holder").html(JUNGLE_SERVICE.getCreateNavButtons());
    addCreateMNListener();
    $(".get-started").off("click");

    createMainNav();
  });
}

$(document).ready(function () {
  JUNGLE_SERVICE.initFirebase();
  initButtons();
  addGetStartedListener();
});

$(document).ready(function () {
  init();
});
