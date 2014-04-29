
$(document).ready(function () {
  // grab untappd api keys from data in html
  var client_id = $('#untappd').data("id");
  var client_secret = $('#untappd').data("secret");
  var url = "http://api.untappd.com/v4/user/info/jh1640?client_id="+client_id+"&client_secret="+client_secret;
  var tmpl = $("#template").html();
  // request data from untappd
  $.get(url, function (data, status) {
    console.log(data);
    window.x = data["response"]["user"]["checkins"]["items"]
    // assign recent beer object to variable
    // window.x = data["response"]["user"]["recent_brews"]["items"];
    // console.log(activity["response"]["user"]["recent_brews"]["items"][0]["beer"]["beer_name"]);
    // assign specific information on each beer to a variable
    for (var i = 0; i < x.length - 10; i++) {
      var beer = x[i]["beer"]["beer_name"];
      var logo = x[i]["beer"]["beer_label"];
      var style = x[i]["beer"]["beer_style"];
      var abv = x[i]["beer"]["beer_abv"];
      var brewery = x[i]["brewery"]["brewery_name"];
      var brewery_url = x[i]["brewery"]["contact"]["url"]
      var comment = x[i]["checkin_comment"]
      var date = x[i]["created_at"]
      //format date
        if (date.charAt(date.length - 5) == "+") {
          date = date.substring(0, date.length -5);
        }
       //check if url passed to us ends in "/" - if so remove it or the <a href> wont work in html
        if (brewery_url.charAt(brewery_url.length -1) == "/") {
          brewery_url = brewery_url.substring(0, brewery_url.length - 1);
        }

      $("#untappd").append("<div class='beer'>\
        <div class='logo'></div>\
        <h5><a href=" + brewery_url + ">" + beer +"</a></h5>\
        <p>" + date + "</p>\
        <ul>\
        <li> <b>Style: </b>"+style+"</li>\
        <li> <b>ABV: </b> "+abv+"</li>\
        <li> <b>Brewery: </b> <a href=" + brewery_url + ">"+brewery+"</a></li>\
        <li> <b>Check-in Comment: '</b>" + comment + "'</li>\
        </ul>\
        </div>");

      $("#logo").text(logo);

    } //close for loop

  }); //close get request

  // $('.content').hide();
  //   $('button').click(function() {
  //       $('this').parent('#post').children('.content').slideToggle(1000);
  //       return false;
  //   });

});  //close document ready

