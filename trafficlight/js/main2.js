var i = 30,
  i1 = 30,
  i2 = 30,
  i3 = 60,
  i4 = 90;
var light = "1";
function fun(p) {
  return p == "4" ? "1" : eval(p + "+1");
}
function remain(p) {
  x = "1234";
  return x.substring(0, x.indexOf(p)) + x.substring(x.indexOf(p) + 1, 4);
}
$("#greenlight1").css("background-color", "green");
$("#redlight2").css("background-color", "red");
$("#redlight3").css("background-color", "red");
$("#redlight4").css("background-color", "red");

setInterval(function () {
  if (i > -1) {
    x = remain(light);
    $("#4t").html(i4--);
    
      $("#t2").html(i2--);
      $("#t3").html(i3--);
      $("#t1").html(i1--);
    
    $("#redlight" + light).css(
      "background-color",
      "rgba(131, 119, 119, 0.329)"
    );
    $("#greenlight" + light).css("background-color", "green");
    $("#redlight" + x[0]).css("background-color", "red");
    $("#redlight" + x[1]).css("background-color", "red");
    $("#redlight" + x[2]).css("background-color", "red");

    if (i < 5) {
      $("#redlight" + light).css(
        "background-color",
        "rgba(131, 119, 119, 0.329)"
      );
      $("#greenlight" + light).css(
        "background-color",
        "rgba(131, 119, 119, 0.329)"
      );
      $("#yellowlight" + light).css("background-color", "yellow");
    }
  }
  if (i == -1) {
    if (light == "1") {
      i1 = 90;
    }
    if (light == "2") {
      i2 = 90;
    }
    if (light == "3") {
      i3 = 90;
    }
    if (light == "4") {
      i4 = 90;
    }
    $("#t" + light).html("");
    $("#yellowlight" + light).css(
      "background-color",
      "rgba(131, 119, 119, 0.329)"
    );
    $("#redlight" + light).css("background-color", "red");
    i = 30;
    light = fun(light);
    $("#t" + light).html("30");
  }
}, 600);
