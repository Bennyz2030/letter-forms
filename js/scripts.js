$(document).ready(function() {
  $("#submit-name").submit(function(event) {
    event.preventDefault();
    const nameInput = $("input#name").val();

    $(".name").text(nameInput);

    $("#story").show();
  });
});