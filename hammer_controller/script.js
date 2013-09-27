
$(function() {

  // var ipAddress = "192.168.111.111";
  var ipAddress = "localhost";

  var closeNotification = function(e) {
    $(".notifications").html("")
  }

  var displayNotification = function(text) {
    $(".notifications").text(text);
    $(".notifications").one("click", closeNotification);
  }

  var bindMovement = function(selector, data, successText, errorText) {
    $(selector).on("click", function() {
      $.ajax("http://" + ipAddress + ":8071/motion-control/update", {
        data: data,
        dataType: "jsonp",
        success: function() { displayNotification(successText) },
        error:   function() { displayNotification(errorText) }
      });
    });
  }

  bindMovement(
    ".forward",
    {forward: 1},
    "Hammer Bot is doing the running man (forward).",
    "Hammer needs a pepsi!  He's not functioning correctly!"
  )

  bindMovement(
    ".stop",
    {forward: 0},
    "Stop, Hammer Time!",
    "Hammer needs a pepsi!  He's not functioning correctly!"
  )

  bindMovement(
    ".left",
    {turn: -1},
    "Hammer Bot is spinning left.  Proper.",
    "Hammer needs a pepsi!  He's not functioning correctly!"
  )

  bindMovement(
    ".right",
    {turn: 1},
    "HammerBot is now spinning right.  Proper.",
    "Hammer needs a pepsi!  He's not functioning correctly!"
  )

  bindMovement(
    ".st_left",
    {strafe: -1},
    "Hammer Bot slides to the left.  You can't touch this!",
    "Hammer needs a pepsi!  He's not functioning correctly!"
  )

  bindMovement(
    ".st_right",
    {strafe: 1},
    "Hammer Bot slides to the right. You can't touch this!",
    "Hammer needs a pepsi!  He's not functioning correctly!"
  )
})