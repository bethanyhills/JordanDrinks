
$(document).ready(function () {
  var client_id = $('#untappd').data("id")
  var client_secret = $('#untappd').data("secret")
  var url = "http://api.untappd.com/v4/user/info/jh1640?client_id="+client_id+"&client_secret="+client_secret;
  $.get(url, function (data, status) {
    console.log(data);
    }
  );
});