
// $( document ).bind( "mobileinit", function() {
//     // Make your jQuery Mobile framework configuration changes here!
//     $.mobile.allowCrossDomainPages = true;  
// });

$(document).ready(function(){

    // $.support.cors = true;
    $.ajax({
        // The 'type' property sets the HTTP method.
        // A value of 'PUT' or 'DELETE' will trigger a preflight request.
        type: 'GET',

        // The URL to make the request to.
        url: 'https://finance.google.com/finance/info?client=ig&q=TPE:2330',
        dataType: 'jsonp',
        cache: false,
        crossDomain: true,
        success: function(response){
            $('#test').text(response[0]['l_cur']);
        },
        error: function(){
            $('#test').text('request failed');
        }
    });
});