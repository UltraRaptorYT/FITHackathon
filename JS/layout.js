

$(document).ready(function() {
  $(".drop .option").click(function() {
    var val = $(this).attr("value"),
        $drop = $(".drop"),
        prevActive = $(".drop .option.active").attr("data-value"),
        options = $(".drop .option").length;
    $drop.find(".option.active").addClass("mini-hack");
    $drop.toggleClass("visible");
    $drop.removeClass("withBG");
    $(this).css("top");
    $drop.toggleClass("opacity");
    $(".mini-hack").removeClass("mini-hack");
    if ($drop.hasClass("visible")) {
      setTimeout(function() {
        $drop.addClass("withBG");
      }, 400 + options*100); 
    }
    triggerAnimation();
    if (val !== "placeholder" || prevActive === "placeholder") {
      $(".drop .option").removeClass("active");
      $(this).addClass("active");
    };
  });
  
  function triggerAnimation() {
    var finalWidth = $(".drop").hasClass("visible") ? 22 : 20;
    $(".drop").css("width", "24em");
    setTimeout(function() {
      $(".drop").css("width", finalWidth + "em");
    }, 400);
  }
});

$(document).ready(function() {
  $(".drop2 .option2").click(function() {
    var val2 = $(this).attr("value"),
        $drop2 = $(".drop2"),
        prevActive2 = $(".drop2 .option2.active").attr("data-value"),
        options2 = $(".drop2 .option2").length;
    $drop2.find(".option2.active").addClass("mini-hack");
    $drop2.toggleClass("visible");
    $drop2.removeClass("withBG");
    $(this).css("top");
    $drop2.toggleClass("opacity");
    $(".mini-hack").removeClass("mini-hack");
    if ($drop2.hasClass("visible")) {
      setTimeout(function() {
        $drop2.addClass("withBG");
      }, 400 + options2*100); 
    }
    triggerAnimation2();
    if (val2 !== "placeholder2" || prevActive2 === "placeholder2") {
      $(".drop2 .option2").removeClass("active");
      $(this).addClass("active");
    };
  });
  
  function triggerAnimation2() {
    var finalWidth2 = $(".drop2").hasClass("visible") ? 22 : 20;
    $(".drop2").css("width", "24em");
    setTimeout(function() {
      $(".drop2").css("width", finalWidth2 + "em");
    }, 400);
  }
});
