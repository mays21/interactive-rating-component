$(".btn").on("click", function () {
  var value = $('input[name="rate"]:checked').val();
  if (value == null) {
    alert("Please feedback the rate!");
  } else {
    $(".rating").hide();
    $(".thankyou").fadeIn();
    $(".user-rating").text(value);
  }
});
