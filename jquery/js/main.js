$("option").hide();
$(".nation").show();
$(".select").show();

let presentnation = presentstate = presentcity = "none";

$("#country").change(function () {
  $("#state").val('Select State');
  $("#city").val("Select city");
  $("." + $(this).val()).show();
  $("." + presentnation).hide();
  $("." + presentstate).hide();
  presentnation = $(this).val();
});

$("#state").change(function () {
  $("#city").val("Select city");
  $("." + $(this).val()).show();
  $("." + presentstate).hide();
  presentstate = $(this).val();
});
